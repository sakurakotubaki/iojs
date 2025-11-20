const card = ["Hello", "World"];

// using flatMap
const result = card.flatMap(src => {
    return src.split("");
});

console.log(result); // [ 'H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]