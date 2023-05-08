// 문자열을 생성하는 방법 2가지
// 1. 문자열 리터럴로 생성
// JS에서는 이 방식으로 쓰기
const stringPrimitive = 'A new String';
console.log(stringPrimitive);

// 2. 생성자를 통해 생성. 비추천.
const stringObject = new String('A new String');
console.log(stringObject);

console.log(`${typeof stringPrimitive}, ${typeof stringObject}`);

const aString = 'How are you';
console.log('0123456789');
console.log('\t', aString[4]);

console.log(aString.charAt(4));