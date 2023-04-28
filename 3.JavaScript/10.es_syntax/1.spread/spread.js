/**
 * ...(spread syntax)
 * 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(Spreading, 전개, 분산) 개별적인 값들의 목록으로 바꿔주는 분법
 * 
 * 사용 가능 대상 : Array, String, Map, Set, DOM Colleciton
 */

// 1. Spread with Arrays
const fruits = ['apple' ,'banana'];
const otherFruits = ['kiwi', 'grape'];

// 기존의 배열 연결 방식 (Array.prototype.concat())
const allFruits = fruits.concat(otherFruits);
// console.log(allFruits);

const myFruits = [...fruits, ...otherFruits];
// console.log(myFruits);
// console.table(myFruits);

const users = [
    { id : 1, userName : 'Coo'},
    { id : 2, userName : 'Kie'},
]
// console.log(users);
// console.table(users);

// 기존 방식
const newUser = { id : 3, userName : 'Zzang'};
// users.push(newUser); // array에 객체 추가

// spread 방식
const secondUser = { id : 4, userName : 'Run'};

const updatedUsers = [...users, newUser, secondUser];
console.table(updatedUsers);