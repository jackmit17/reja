// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// //CALLBACK functions
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a < 30) callback(null, list[1]);
//     else if (a > 30 && a < 40) callback(null, list[2]);
//     else if (a > 40 && a < 50) callback(null, list[3]);
//     else if (a > 50 && a < 60) callback(null, list[4]);
//     else {
//        setInterval(function () {
//         callback(null, list[5]);
//         }, 1000);
//     }
//   }

// maslahatBering(53, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// })

// ASYNC function
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a < 30) return list[1];
//   else if (a > 30 && a < 40) return list[2];
//   else if (a > 40 && a < 50) return list[3];
//   else if (a > 50 && a < 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call via then/catch
// console.log('passed here 0');
// maslahatBering(25)
// .then((data) => {
//   console.log("javob:", data);
// })
// .catch((err) => {
//     console.log('ERROR:', err);
// });
// console.log('passed here 1');

// call via async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
// }
// run();


// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalaning yechimi:

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i <= word.length; i++) {
//     if (word[i] == letter) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = countLetter('e', 'engineer');
// console.log('Result:', result);

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(number) {
  let count = 0
  for (let i = 0; i <= number.length; i++) {
        if (number[i] >= 0)  {
          count++;
        }
      }
      return count;
}

const result = countDigits("ad2a54y79wet0sfgb9");
console.log("Result:", result);