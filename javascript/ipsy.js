console.log('ipsy');

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the electionWinner function below.
function electionWinner(votes) {
    let obj = {};
    votes.forEach(vote => {
        console.log(vote)
        if (!obj.hasOwnProperty(vote)) {
            obj[vote]=1
        } else {
            obj[vote] += 1
        }
    })
    console.log(obj)
    let winner;
    let voteCount = 0
    let arr = []
    const newArray = Object.keys(obj).map(i => {
        if (voteCount <= obj[i]) {
            voteCount = obj[i]
            winner = i
        }
        arr.push([i, obj[i]])
        console.log(i, 'obj i', obj[i])
    })
    console.log(newArray, arr)
    arr.sort((a, b) => {
        return a + b
    })
    console.log('arr',arr)
    return obj
}

function main() {
