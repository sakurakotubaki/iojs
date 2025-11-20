const obj = {
    userName: "junichi",
    // 通常の関数は呼び出し時のthisを持つため、userNameにアクセスできる
    greet: function (greeting) {
        return `${greeting}, ${this.userName}!`;
    },
    // アロー関数は自身のthisを持たないため、ここでのthisは期待通りに動作しない
    arrowFunction: () => {
        return `This is ${this.userName}'s function.`;
    }
};

console.log(obj.greet("Hello")); 
// console.log(obj.arrowFunction());

// obj copy
const copyObj = { ...obj };
console.log(copyObj.greet("Copy Object Hello")); 
// console.log(copyObj.arrowFunction());