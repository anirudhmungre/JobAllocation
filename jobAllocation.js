function getEffectiveness(fName) {
    const fs = require('fs');
    let lines = fs.readFileSync(fName, "UTF8").split('\n');
    let arr = []
    for (let i = 0; i < lines.length; i++) {
        arr.push(lines[i].split(' '))
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].map(function (x) { return parseInt(x) })
    }
    return arr
}

function getAllIndexes(arr, val) {
    let indexes = [], i
    for(i = 0; i < arr.length; i++)
        if (arr[i] == val)
            indexes.push(i)
    return indexes
}

function checkInitAssignment(arr) {
    let index, initAssign, min
    initAssign = new Array(arr.length)
    initAssign.fill([])
    for (let i = 0; i < arr.length; i++) {
        min = Math.min.apply(null, arr[i])
        index = arr[i].indexOf(min)
        initAssign[i] = getAllIndexes(arr[i], min)
    }
    if (initAssign.indexOf([]) > -1) { return false }
    else { return initAssign }
}

let effectiveness, initAssign
effectiveness = getEffectiveness("input.txt")
initAssign = checkInitAssignment(effectiveness)
console.log(initAssign[0][0])