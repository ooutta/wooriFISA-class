let year = 2023; // let year: number = 2023;과 같음
// -> 타입 추론(Type Inference), 2023의 값이 할당되는 과정에서 타입 시스템이
// year의 타입을 number로 추론함

let userName = 'Kim';
console.log(userName.toLowerCase()); // userName은 string 타입이기 때문에
// 에디터에서 string에서만 사용할 수 있는 메서드만 선별해서 보여줌

const array = [1, '문자열', 4]; // (string | number)[]
const numbers: number[] = [1, 2, 3]; // number만 받을 수 있는 배열


