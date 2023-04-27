// 1
const array = ['orange', 'cookie', 'orange-cookie'];

console.log(array);
console.log(typeof array); // 기본 타입을 제외한 모든 것은 객체

// Array 타입인지 확인
console.log(Array.isArray(array));
console.log(array.length);
console.log(array[0], array[2]);

// 2
const strArr = ['orange', 'kiwi', 'apple'];
delete strArr[1]; //희소배열이 생성되어서 비추천

// 희소배열은 요소의 개수가 변하지 않기 때문에 헷갈림
console.log(strArr, strArr.length);
// > ['orange', 비어 있음, 'apple] 3

strArr.push('cookie');
console.log(strArr);
// > ['orange', 비어 있음, 'apple', 'cookie']

// 3
// Array.(prototype).splice(삭제를 시작할 인덱스, 삭제할 요소)를 사용하여 요소 제거
const nutArr = ['walnut', 'almond', 'pinenut'];
nutArr.splice(1,1);
console.log(nutArr);