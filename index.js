let ungeradeZahlen =[];
let aktuelleahl = 0;
let max = 1000;

while (aktuelleahl <= max){
    if(aktuelleahl % 2 !=0){
        ungeradeZahlen.push(aktuelleahl);
    }
    aktuelleahl++;
}

console.log("komplette Array:",ungeradeZahlen);
console.log("letztes Element:",ungeradeZahlen[ungeradeZahlen.length-1]);