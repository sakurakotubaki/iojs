# bindメソッドの仕組みについて解説

`Controller` クラス内では `this.service` を使用しています。
しかし、`handler.ts` でメソッドを変数に代入して実行すると、`this` の情報が失われます。

```mermaid
sequenceDiagram
    autonumber
    participant H as handler() <br> (呼び出し元)
    participant C as Controller Instance <br> (メモリ上のオブジェクト)
    participant F as execute Function <br> (関数そのものの定義)

    Note over H, C: 1. インスタンス生成
    H->>C: new Controller()
    C-->>H: instance (this.service を保持)

    Note over H: 2. メソッドの「参照」だけを変数に入れる
    H->>H: const run = controller.execute
    Note right of H: この時点で「run」はただの関数。<br>Controllerインスタンスとの<br>紐付け(this)が切れている。

    Note over H, F: 3. 関数として実行 (bindなし)
    H->>F: run("msg")
    
    Note right of F: 【重要】<br>ドット(.)なしで呼ばれたため<br>this は undefined (Strict Mode)

    rect rgb(255, 200, 200)
        Note over F: 4. 内部処理の実行試行
        F->>F: this.service.doSomething(...) を実行しようとする
        Note right of F: this が undefined なので<br>undefined.service となりエラー
        F--xH: TypeError: Cannot read properties of undefined
    end
```

## bindありのライフサイクル

`bind(controller)` を行うと、元の関数をラップし、`this` を固定した「新しい関数」が生成されます。

```mermaid
sequenceDiagram
    autonumber
    participant H as handler() <br> (呼び出し元)
    participant C as Controller Instance <br> (メモリ上のオブジェクト)
    participant BF as Bound Function <br> (bindで生成された関数)
    participant F as Original execute <br> (元の関数定義)

    Note over H, C: 1. インスタンス生成
    H->>C: new Controller()
    C-->>H: instance (this.service を保持)

    Note over H: 2. bindして変数に入れる
    H->>H: const run = controller.execute.bind(controller)
    Note right of H: bindにより、this=controller に<br>固定された「新しい関数」が作られる

    Note over H, BF: 3. 関数として実行
    H->>BF: run("msg")
    
    Note right of BF: 内部で this が controller であることを<br>保証して元の関数を呼ぶ

    rect rgb(200, 255, 200)
        Note over BF, F: 4. 内部処理の実行
        BF->>F: execute("msg") with this=controller
        F->>C: this.service.doSomething(...)
        Note right of F: this が controller なので<br>正しくメソッドが実行される
    end
```