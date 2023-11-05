const display = document.querySelector(".display")

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const del = document.querySelector(".del")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const clearall = document.querySelector(".clear-all")
const equal = document.querySelector(".equal")

const number = [0, 0]



for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        
        number[0] = parseInt(numbers[i])
    })
}
plus.addEventListener("click", function () {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            number[1] = parseInt(numbers)
        })
    }

    equal.addEventListener("click", function (params) {
        number[0] += number[1]
        console.log(number[0]);
        display.textContent = number[0]
    })
})
