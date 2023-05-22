"use strict";
// 파라미터에 별도의 타입을 지정하지 않으면, any 타입으로 지정됨
// 파라미터에 타입 선언
function add(a, b) {
    return a + b;
}
// 함수 옆에 반환 타입으로 number 지정
function sub(a, b) {
    return a - b;
}
// void: 별도의 반환값이 없을 때
function divide(a, b) {
    console.log(a / b);
}
const multiply = (a, b) => a * b;
// Cookie 타입만 받는 배열 cookies
const cookies = [
    { name: 'OREO', amount: 5 },
    { name: 'HERSHEY', amount: 2 },
    { name: 'LOTTE', amount: 3 },
];
// 함수의 시그니처(선언부) 정의, string 타입의 name 인수와 반환타입으로 number를 가지는 함수
let printLengthOfName;
function checkStockOfCookie(cookieArray, cookieCounter) {
    cookieArray.map(cookieCounter);
}
function myCookieCounter(cookie) {
    console.log(`${cookie.name}'s amount is ${cookie.amount}`);
}
checkStockOfCookie(cookies, myCookieCounter);
