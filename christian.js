let ungeradeZahlen = []; // array für ungerade Zahlen
let counter = 0; // start
const max = 1000; // ende

while (counter <= max) {
  if (counter % 2 != 0) {
    // Zahl ist ungerade
    ungeradeZahlen.push(counter);
  }
  counter++;
}

console.log("Array aller ungerader Zahlen:", ungeradeZahlen);
console.log(
  "Letztes Element des Arrays:",
  ungeradeZahlen[ungeradeZahlen.length - 1]
);
