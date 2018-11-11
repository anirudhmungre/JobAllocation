function getEffectiveness(fName) {
    const fs = require('fs');
    let lines = fs.readFileSync(fName, "UTF8").split('\n');
    let arr = []
    for (let i = 0; i < lines.length; i++) {
        arr.push(lines[i].split(' '))
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].map(function (x) {return parseInt(x)})
    }
    return arr
}

console.log(getEffectiveness("input.txt"))