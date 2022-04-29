let numOne = '';
let operator = '';
let numTwo = '';
let result_num ;

const operator_screen = document.querySelector('#operator');
const result_screen = document.querySelector('#result');

// const onClickNumber = (number) => () => {
//   if (!operator) {
//     numOne += number;
//   } else {
//     numTwo += number;
//   } 
//   result_screen.value += number;
// }



const onClickNumber = function (event) {
  if (operator == '') {
    numOne += event.target.textContent;
    result_screen.value += event.target.textContent;
    return;
  } 
   if (numTwo == '') {
     result_screen.value = '';
    }
    numTwo += event.target.textContent;
    result_screen.value += event.target.textContent;
};


document.querySelector('.num0').addEventListener('click', onClickNumber);
document.querySelector('.num1').addEventListener('click', onClickNumber);
document.querySelector('.num2').addEventListener('click', onClickNumber);
document.querySelector('.num3').addEventListener('click', onClickNumber);
document.querySelector('.num4').addEventListener('click', onClickNumber);
document.querySelector('.num5').addEventListener('click', onClickNumber);
document.querySelector('.num6').addEventListener('click', onClickNumber);
document.querySelector('.num7').addEventListener('click', onClickNumber);
document.querySelector('.num8').addEventListener('click', onClickNumber);
document.querySelector('.num9').addEventListener('click', onClickNumber);





// const onClickOperator = (oper) => () => {
//     if (numOne) {
//         operator = oper;
//         operator_screen.value = oper;
//     } else {
//         alert('숫자를 먼저 입력하셈')
//     }
// }
const onClickOperator = (oper, event) => {
  if (result_num == '') {
    numTwo = '';
  }
  else {
    operator = oper;
    operator_screen.value = oper;
  }  
}



// document.querySelector('.plus').addEventListener('click', onClickOperator('+'));
// document.querySelector('.minus').addEventListener('click', onClickOperator('-'));
// document.querySelector('.divide').addEventListener('click', onClickOperator('/'));
// document.querySelector('.multiple').addEventListener('click', onClickOperator('*'));

document.querySelector('.plus').onclick = () => {
  onClickOperator('+');
}
document.querySelector('.minus').onclick = () => {
  onClickOperator('-');
}
document.querySelector('.divide').onclick = () => {
  onClickOperator('/');
}
document.querySelector('.multiple').onclick = () => {
  onClickOperator('*');
} 




document.querySelector('.equal').addEventListener('click', (event) => {
    if (numTwo != '') {
        switch (operator) {
            case '+':
                result_num = parseInt(numOne) + parseInt(numTwo);
                result_screen.value = result_num;
                numOne = result_screen.value;
                console.log(numOne);
                break;
            case '-':
                result_screen.value = numOne - numTwo;
                numOne = result_screen.value;
                break;
            case '*':
                result_screen.value = numOne * numTwo;
                numOne = result_screen.value;
                break;
            case '/':
                result_screen.value = numOne / numTwo;
                numOne = result_screen.value;
                break;
            default:
                break;
        }
    } else {
        alert('숫자를 먼저 입력하셈');
    }





});


document.querySelector('.delete').addEventListener('click', () => {
    result_screen.value = result_screen.value.slice(0, -1);
    if (numTwo == '') {
      numOne = result_screen.value;
    } else {
      numTwo = result_screen.value;
    }
});



document.querySelector('.clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    operator_screen.value = '';
    result_screen.value = '';
});