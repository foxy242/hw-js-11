// task 1

// const logItems = [111, 222, 333, 444, 555]
// for(let i = 0; i < logItems.length; i +=1) {
// console.log(`${i}`)
// }

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango',
//   а для індексу 2 виведе '3 - Ajax'.


// task 2

// function calculateEngravingPrice(message, pricePerWord) {
//     let text = ('asdlajdfsghdkjfghdfkghsfhudgdkkdjshgiusgjsdkn');
//     let pricePerWord = (10)
//   }
  
//   Напиши скрипт підрахунку вартості гравіювання прикрас.
//   Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//   приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//   і повертає ціну гравіювання всіх слів в рядку.

// task3

// function findLongestWord(string) {
// const words = string.split(" ")
// let wordLength = words[0];
// for (const word of words) {
//     if (word.length > wordLength.length) {
//         wordLength = word        
//     }
//     word.length 
// }
// return wordLength
// }
// console.log(findLongestWord('Я не знаю що написати'))
// findLongestWord('Я не знаю що написати') 

// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини)
// і повертає найдовше слово в цьому рядку.

// task4

// function formatString(string) {
//     const stringLength = string.length
//     if (stringLength < 40) {
//         return string
//     } else {
//         console.log(string.slice(0, 40))
//     }
// }
// formatString(`Learning javascript so I can make Websites on google`);

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...',
// після чого повертає укорочену версію.

// task5

function checkForSpam(message) {
    const messageCheck = message.split(' ')
    if (messageCheck.includes("spam" || "sale")) {
        alert("There's a forbidden messge on your text")
    } else {
        alert("There's no forbidden messge on your text")
    }
}
checkForSpam("School is always spamming too much homework")

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. 
// Функція перевіряє її на вміст слів spam і sale. 
// Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. 
// Слова в рядку можуть бути в довільному регістрі.

// task6

function sendNumber() {
    const askArray = []
    let askNumber
    do {
        askNumber = prompt("Введіть число")
        askArray.push(askNumber)
    } while (askNumber !== null)
    return askArray
}
console.log(sendNumber())
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, 
// поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, 
// необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. 
// Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, 
// в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', 
// при цьому результат promptзаписувати в масив чисел не потрібно, 
// після чого знову користувачеві пропонується ввести число в prompt.