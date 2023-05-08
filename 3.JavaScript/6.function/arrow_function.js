// 두 수 a, b를 받아서 합을 반환하는 sum
const sum = (a, b) => a + b; // 암묵적인 return

// 반환해야 하는 값이 객체일 경우
const division = (a, b) => {
    return {
        age : 2,
        name : 'toto'
    }
}

// 코드가 한 줄인데, 객체({})를 반환하고 싶다. 예외적으로 소괄호 추가햐여 객체라고 명시
const division2 = (a, b) => ({age : 2, name : 'toto'});

// 파라미터가 1개인 경우 () 없어도 됨
const square = x => x * x;

// 파라미터가 한개도 없는 경우
const greet = () => console.log('Hello');
greet();