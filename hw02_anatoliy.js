1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
} Вывести в консоль результат работы функции с возрастами 17, 18, 61


const checkAge = function(age_1, age_2, age_3) {

    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then")
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcom!")
    }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
}

checkAge(17, 18, 61)


2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся
тип данных. И если он не Number - кидалась ошибка. */

const checkAge = function(age) {

    if (!isNaN(age)){
        if (age < 18) {
            console.log("You don't have access cause your age is " + age + " It's less then")
        }
        else if (age >= 18 && age <= 60) {
            console.log("Welcom!")
        }
        else if (age > 60) {
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    }
    else {
        console.log("Error")
    }
}

checkAge("qqq")

3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит
     ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age) {
    age = Number(age)
    if (!isNaN(age)){
        if (age < 18) {
            console.log("You don't have access cause your age is " + age + " It's less then")
        }
        else if (age >= 18 && age <= 60) {
            console.log("Welcom!")
        }
        else if (age > 60) {
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    }
    else {
        console.log("Error")
    }
}


checkAge("22")
checkAge("17qq")
checkAge(5)

// 4***: Преобразовать задание 3* таким образом,
// чтобы возраст вводится используя функцию prompt в привязанной верстке
let agePrompt = prompt('Enter age:')
checkAge(agePrompt)
