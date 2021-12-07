
let grade = [];
let ungrade = [];
let ausgabe = 0;

while ((grade.length<=100) && (ungrade.length<=100)) {
    grade.push(ausgabe);
    ungrade.push(ausgabe+1);
    ausgabe+=1;
    if((grade.length == 100) && (ungrade.length == 100)){
        console.log(grade, ungrade);
    }
        }
