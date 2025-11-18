const arr = ["aaa", "bbb", "ccc"];

const [first, second] = arr;

console.log(first);  // "aaa"
console.log(second); // "bbb"
// 3番目の要素を取得する場合
const [, , third] = arr;
console.log(third);  // "ccc"
// 末尾の要素を取り出し　
const last = arr.at(-1);
console.log(last);  // "ccc"

// 要素の存在チェック
const city = ["Tokyo", "Osaka", "Nagoya"];
// -1なのは見つからなかった場合
if(city.indexOf("Nagoya") !== -1) {
    console.log("町がある！");
} else {
    console.log("👋☠️");
}

// includesメソッドで要素の存在チェック
if(city.includes("Tokyo")) {
    console.log("🗼TOKYO");
} else {
    console.log("Kyoto is not in the list.");
}