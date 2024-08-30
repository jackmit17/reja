/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi */

function findDoublers(word) {
  for (let i = 0; i <= word.length; i++) {
   const double = word[i];
   for ( let m = i + 1; m <= word.length; m++) {
    if (double === word[m]) {
      return true;
    }
   }
  }
  return false;
}

const result = findDoublers("hello");
console.log("Result:", result);
