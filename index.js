/*
let grade = [];
let ungrade = [];
let ausgabe = 0;

while ((grade.length<=1000) && (ungrade.length<=1000)) {
    grade.push(ausgabe);
    ungrade.push(ausgabe+2);
    ausgabe+=1;
    if((grade.length == 1000) && (ungrade.length == 1000)){
        console.log(grade, ungrade);
    }
        }
*/
/*Anderer Weg*/
let ungeradeZahlen = -1;
const ungeradeZahlenSrr = [];

while (ungeradeZahlen < 1000) {
    ungeradeZahlen += 1;
    ungeradeZahlenSrr.push(ungeradeZahlen);
}

console.log(ungeradeZahlenSrr);