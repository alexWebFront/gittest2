
let button = document.getElementById('btn');
button.addEventListener('click', calc);

function calc() {
   let firstNumber = document.getElementById('1');
   let secondNumber = document.getElementById('2');
   let znak = document.getElementById('3');
   let result = document.getElementById('4');
   if (znak.value == "+") {
      result.innerText = Number(firstNumber.value) + Number(secondNumber.value);
   } else if (znak.value == "-") {
      result.innerText = Number(firstNumber.value) - Number(secondNumber.value);
   } else if (znak.value == "*") {
      result.innerText = Number(firstNumber.value) * Number(secondNumber.value);
   } else if (znak.value == "/") {
      if (Number(secondNumber.value) == 0) {
         alert("Ошибка! На 0 делить нельзя");
         return;
      }
      result.innerText = Number(firstNumber.value) / Number(secondNumber.value);
   }
   else {
      console.log("Ошибка ввода данных");
   }
}