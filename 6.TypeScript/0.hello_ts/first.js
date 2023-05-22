// 컴파일 시점 : 코드 실행 하기 전에 미리 -> TypeScript
// const message = 'Hello World!';
// const lower = message.toLowerCase();
// console.log(lower);

// message(); // 함수가 아님. 에러 발생

const message = () => console.log('Hello World!');
console.log(typeof message);

if(typeof message === 'function') {
    message();
}

const printLength = value => {
    console.log(`이 문자열의 길이는 ${value.length}`);
} 

printLength('안녕하세요');

// undefined, 함수를 호출할 때부터 정확한 타입을 전달하는 방법?? -> TypeScript
printLength(5); // 문자열이 아닌 값을 넣어도 에러 안 뜸

/*
TypeScript -> 새로운 프로그래밍 언언느 아니고,
JavaScript의 슈퍼셋(SuperSet)
JavaScript에 Type을 씌웠다.
*/