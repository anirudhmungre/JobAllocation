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
    // console.log(arr + "     " + val)
    for(i = 0; i < arr.length; i++)
        if (arr[i] == val)
            indexes.push(i)
    return indexes
}

function checkInitAssignment(effectiveness) {
    let temp, index, initAssign, min
    temp = effectiveness
    initAssign = new Array(temp.length)
    initAssign.fill([])
    for (let i = 0; i < temp.length; i++) {
        min = Math.min.apply(null, temp[i])
        console.log(temp[i] + "      " + min)
        index = temp[i].indexOf(min)
        initAssign[i] = getAllIndexes(temp[i], min)
    }
    if (initAssign.indexOf([]) > -1) { return false }
    else { return initAssign }
}

let effectiveness, initAssign
effectiveness = getEffectiveness("input.txt")
initAssign = checkInitAssignment(effectiveness)
console.log(initAssign)