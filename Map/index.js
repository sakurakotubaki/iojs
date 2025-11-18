// 辞書用とはObjectよりMapを使うべき

const city = {
    "JP": "Tokyo",
    "US": "New York",
    "FR": "Paris"
};

city.push("UK", "London"); // Error

for(const key in city) {
    if(city.hasOwnProperty(key)) {
        console.log(`${key} : ${city[key]}`);
    }
}

// Mapを使う場合
const cityMap = new Map();
cityMap.set("JP", "Tokyo");
cityMap.set("US", "New York");
cityMap.set("FR", "Paris");

// 要素の取得
console.log(cityMap.get("JP")); // Tokyo

// for of
console.log("動作は同じ");
for(const [key, value] of cityMap) {
    console.log(`${key} : ${value}`);
}