function greeting(name: string) {
    console.log(`Hello ${name}`);
}

// function processUserInput(name: string, callbackFn: Function) {
//     callbackFn(name);
// }

processUserInput('kim', greeting);
// 단점 : 어떤 함수라도 전달될 수 있기 때문에 타입 범위가 너무 넓어짐

processUserInput('kim', () => {}); // 다른 함수의 시그니처도 전달이 가능한 상태

// 콜백함수로 전달되는 greeting()의 파라미터의 반환타입으로
// 전달되어야 하는 함수의 타입을 명시(권장)
// function processUserInput(name: string, callbackFn: (name: string) => void) {
//     callbackFn(name);
// }

// 다른 형태의 함수는 전달 불가
// processUserInput('kim', (a: number, b:number) => {});
// processUserInput('kim', () => { return 5});
// 되는 이유: https://www.typescriptlang.org/ko/docs/handbook/2/functions.html#%ED%95%A8%EC%88%98%EC%9D%98-%ED%95%A0%EB%8B%B9%EA%B0%80%EB%8A%A5%EC%84%B1

type callbackFnType = (name: string) => void;
function processUserInput(name: string, callbackFn: callbackFnType) {
    callbackFn(name);
}