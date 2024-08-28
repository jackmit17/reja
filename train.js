// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(word) {
  let phase = word.split('').reverse('').join('')
  if (phase !== undefined) {
     return phase
  }
}
const result = getReverse("hello")
console.log("Result:", result);
