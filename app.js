 const lastname = ['Saidov', 'Hoshimov', 'Erkinov'];

 const qizbolafamiliya = lastname.map(lastname => {
     if (!lastname.endsWith('va')){
         return lastname + 'a';
     }
     return lastname;
 });

 console.log(qizbolafamiliya);

// Funksiya N sonini toq yoki juftligini aniqlash uchun
function toqYokiJuft(n) {
    if (n % 2 === 0) {
      return 'Juft';
    } else {
      return 'Toq';
    }
  }
  
  // Misollar
//   console.log(toqYokiJuft(4)); // 'Juft'
//   console.log(toqYokiJuft(7)); // 'Toq'
//   console.log(toqYokiJuft(10)); // 'Juft'
//   console.log(toqYokiJuft(15)); // 'Toq'

// function findUniqueNumber(arr) {
//     // Har bir elementning paydo bo'lish sonini hisoblash uchun obyekt yaratamiz
//     const count = arr.reduce((acc, num) => {
//       acc[num] = (acc[num] || 0) + 1;
//       return acc;
//     }, {});
  
//     // Bir marta paydo bo'lgan elementlarni topamiz
//     for (let num in count) {
//       if (count[num] === 1) {
//         return parseFloat(num);
//       }
//     }
  
//     // Agar bitta ham yagona element topilmasa, null qaytaramiz
//     return null;
//   }
  
//   // Misollar
//   const numbers1 = [1, 1, 1, 2, 1, 1];
//   const uniqueNumber1 = findUniqueNumber(numbers1);
//   console.log(uniqueNumber1); // 2
  
//   const numbers2 = [0, 0, 0.55, 0, 0];
//   const uniqueNumber2 = findUniqueNumber(numbers2);
//   console.log(uniqueNumber2); // 0.55
  
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
  
//   // Misol
//   const number = 5;
//   console.log(`${number}! = ${factorial(number)}`); // 5! = 120
  