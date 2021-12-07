let ungerade = [];
let helpvariable = 0;
let max = 500;

while (ungerade.length<max) {

    ungerade.push(helpvariable+1);
    helpvariable+=2;

};
console.log(ungerade);
console.log(ungerade[ungerade.length -1])