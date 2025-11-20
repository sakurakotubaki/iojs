import { Controller } from "./application/controller.js";

export function handler() {
    const controller = new Controller();

    // Controllerを呼び出してbindに渡して実行するfunction
    // bind(controller) をしないと、execute内部の this が undefined になりエラーになる
    // const run = controller.execute.bind(controller);
    // (req: string) => controller.execute(req);
    const run = (req: string) => {
      console.log("bind()なしで実行する。アロー関数でラップする");
      controller.execute(req);
    }

    console.log("--- Handler Start ---");
    run("外から渡すよ👋☺️");
    console.log("--- Handler End ---");
}

// 実行してみる
handler();
