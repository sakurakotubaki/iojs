import { Foo } from "./foo";

// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// console.log(greet("World"));

// const foo = new Foo();
// const run = foo.fooFunc.bind(foo);
// console.log(run("bindするよ〜!"));

class Bar {
    constructor(private foo: Foo) {}

    execute(message: string): void {
        const run = this.foo.fooFunc.bind(this.foo);
        console.log(run(message));
    }
}

const foo = new Foo();
const bar = new Bar(foo);
bar.execute("bindするよ〜! from Bar");