let ungradeZhalen = [];
let gradaZhalen = [];
let aktuelleZhal = 0;

while (gradaZhalen.length < 1000) {
    // wenn aktuelleZhal ist nicht gradezhal != nicht gleich oder not equal.//
  if (aktuelleZhal %2 != 0) {
    gradaZhalen.push(aktuelleZhal);
  } else {
    ungradeZhalen.push(aktuelleZhal);
  }
  aktuelleZhal++;
}
      console.log(ungradeZhalen);
      console.log(gradaZhalen);