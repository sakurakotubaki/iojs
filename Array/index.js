// 配列のプロトタイプを確かめる例）
const arr = [1, 2, 3];

fffffff

arr.push(4);

console.log(arr.hasOwnProperty('push')); // true
console.log(arr.push === Array.prototype.push); // true

console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// 配列をコピーする方法
// sliceメソッドで配列をコピー
const arr2 = arr.slice(); 
console.log(arr2); // [1, 2, 3, 4]

// Array.fromで配列をコピー
const copyArr = Array.from(arr); 
console.log(copyArr); // [1, 2, 3, 4]

// for(let i = 0; i < arr.length; i++)でコピーする。
console.log('----------------------------------------------');
console.log('for loop copy:');
console.log('----------------------------------------------');
const manualCopy = [];
for (let i = 0; i < arr.length; i++) {
    manualCopy.push(arr[i]);
}

console.log(manualCopy); // [1, 2, 3, 4]

const f = manualCopy.filter((val) => val === 2);
console.log(f); // [2]

// コピーした配列から１を取り出す
const firstElement = arr2.shift();
console.log(firstElement);

// コピーした配列から4を取り出す
const lastElement = arr2.pop();
console.log(lastElement);

// コピーした配列から3を取り出す
const thirdElement = arr2.splice(1, 1)[0];;
console.log(thirdElement);