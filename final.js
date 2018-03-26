'use strict';

let strings = [
  "abc",
  "ijk",
  "xyz"
];

function stringReset (strings) {

  let stringsArray = [];

  for(let i = 0; i < strings.length; i++) {
    for(let j = 0; j < strings[i].length; j++) {
      stringsArray.push(strings[j][i]);
    }
  }
  let finalStrings = [];
  let index = 0;
  for(let i = 0; i < 3; i++){
    finalStrings.push(stringsArray.slice(index,index+3).join(''));
    index += 3;
  }
  return finalStrings
}

module.exports = stringReset;
