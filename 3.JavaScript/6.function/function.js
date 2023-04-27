// 1. 기본
/**
 * JSDOC(문서화)
 * 두 수를 받아서 덧셈 결과를 반환하는 함수
 * @param {number} a 
 * @param {number} b 
 * @author 'kim'
 * @returns {number} 덧셈 결과 반환
 */
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add); // 함수 자체를 문자열로 출력
console.log(add()); // default value로 계산됨
console.log(add(2, 3));

// 2. 함수 표현식 방식
const mtp = function multiply(a, b) {
    return a * b;
}
console.log(mtp(2, 3));

// ES -> (ECMAScript)
// ES6 (약 ES2015) 등장한 문법. 화살표 함수
// In JS, => (Fat arrow) / In Java, ->(Thin arr)
const sub = (a, b) => {return a - b;}
console.log(sub(2, 3));

// 코드가 한 줄인 경우 { }, return 키워드 생략 가능
const sub2 = (a, b) =>  a - b;
console.log(sub2(2, 3));
