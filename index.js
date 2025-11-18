const fs = require('fs');

// 同期I/O
// const fileContent = fs.readFileSync('index.txt', 'utf-8');
// console.log(fileContent);

// 非同期I/O
fs.readFile('index.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

console.log("loding...");