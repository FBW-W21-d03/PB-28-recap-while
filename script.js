
  
let ungeradeZahlen = [];
let aktuelleZahl = 0;
let max = 1000;

// Nochmal Wiederholung zu if/else
let habeIchKaffee = true; // Boolean - Wahrheitswert (true oder false)

if (true === "true") {
  console.log("Bedingung erfüllt.");
} else {
  console.log("Bedingung nicht erfüllt.");
}

while (aktuelleZahl <= max) {
  if (aktuelleZahl % 2 == 1) {
    // != - Ungleich / Nicht gleich
    // == 1 geht auch
    // % - Modulo Operation = Teilen mit Rest
    // 4 / 2 = 2
    // 5 / 2 = 2,5
    // 6 / 2 = 3
    // 4 % 2 = 0
    // 5 % 2 = 1
    // 6 % 2 = 0
    ungeradeZahlen.push(aktuelleZahl);
  }
  aktuelleZahl++;
}

console.log("komplette Array:", ungeradeZahlen);
console.log("201. Element:", ungeradeZahlen[200]);
console.log("letztes Element:", ungeradeZahlen[ungeradeZahlen.length - 1]);