"use strict";
function greet(person, data) {
    console.log(`Hello ${person}, today is ${data.toDateString()}!`);
}
// greet('Brendan`); // 잘못된 인자 개수 전달 시 에러 발생
// greet('Brendan', undefined);
// undefined를 검출하기 위해 "strict": true 설정해줌.
greet('Brendan', new Date());
/* TypeScript는 타입만 확인해주는 역할
실제 코드 실행은 JS로 해야함

hello.ts -> hello.js로 변환(트랜스파일, Transpile)

컴파일 vs 트랜스파일
tsc - version
typescript compiler

컴파일 - 자연어 -> 기계어(Java)
트랜스파일 - 비슷한 언어로 바꿔주는 것
typescript -> javascript

cmd에서 [tsc "변환시킬ts파일.ts"] 하면 변환된 js 파일 생김.
*/ 
