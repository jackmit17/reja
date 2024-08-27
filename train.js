// D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

function checkContent(word, letters) {
  let check1 = word.split("").sort().join("");
  let check2 = letters.split("").sort().join("");
  if (check1 === check2) {
    return true;
  }
  return false;
}

const result = checkContent("mitgroup", "mitgroup");
console.log("Result:", result);