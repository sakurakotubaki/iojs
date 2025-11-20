const items = ["foo", "bar", "baz"];

// ...
const copySpread = [...items];
console.log(copySpread); // ['foo', 'bar', 'baz']

// structuredClone関数を使う方法
const copyStructuredClone = structuredClone(items);
console.log(copyStructuredClone); // ['foo', 'bar', 'baz']