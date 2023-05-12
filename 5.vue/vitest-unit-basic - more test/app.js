// 자동 import 해준 것 뒤에 js 확장자명 추가하기
import { add } from "./src/calculator.js";

const form = document.getElementById('form');
const output = document.getElementById('result');

const formSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const firstNumber = formData.get('firstNumber');    
    const secondNumber = formData.get('secondNumber');
    
    const numbers = [];
    numbers.push(firstNumber);
    numbers.push(secondNumber);

    // 덧셈 로직
    const result = add(numbers);

    output.textContent = result;
    
}

form.addEventListener('submit', formSubmitHandler);