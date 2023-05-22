let userName: string = 'dd'; // userName은 string 타입만 받을 ㅅ ㅜ있도록 제한
// console.log(userName); // 할당 전 사용 시 에러 발생

userName = 'Kim';
console.log(userName);

// userName = 5; // Type 'number' is not assignable to type 'string'.
// -> number 타입은 string 타입 변수에 할당할 수 없기 때문에 엥러 발생

const allUsers = 5; // 5는 number이기 때문에 number 타입으로 추론됨
// 정확히 따지면, number라기보다는 literal.



// 리터럴 타입: 5, '문자열'과 같은 그 값 자체가 타입
// 1, 2, 3, 4, 5 -> number
