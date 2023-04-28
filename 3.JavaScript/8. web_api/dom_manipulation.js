// DOM 객체
console.log(document);

// 어떤 객체의 프로퍼티를 조회하고 싶을 때
console.dir(window.document);

console.log(window.document === document);

// DOM의 조작
const h1Tag = document.getElementById('main-title');
console.log(h1Tag, typeof h1Tag);
// console.dir(h1Tag.innerText);

const liList = document.getElementsByClassName('list-item');
console.log(liList, typeof liList);

console.log([1,2,3], typeof [1,2,3]);
console.log(liList);

const test = document.querySelector('ul li:first-of-type');
console.log(test);
console.log(document.querySelector('ul li:first-of-type'));
console.log(document.querySelectorAll('ul li'));
// console.log(document.querySelector('ul li:nth-of-type(1)').textContent);  // Item1
// console.log(document.querySelector('ul li:nth-of-type(2)').textContent); // Item2
// querySelectAll(); ->전체 선택해서 가져오기