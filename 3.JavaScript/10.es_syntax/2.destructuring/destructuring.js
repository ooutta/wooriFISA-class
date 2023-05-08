/**
 * Destructuring, 구조 분해
 * 
 * 1. Object
 * 2. Array
 */

// 1. Object
const book = {
    id : 1,
    title : 'The great Gatsby',
    pubData : '10/04/2025'
};

// 기존 방식
// const id = book.id;
// const title = book.title;
// const pubData = book.pubData;

// const { id: myId, title, pubData } = book; // id 변수명 변경
// console.log(myId); 
// console.log(id, title, pubData);



// 중첩 객체
const anotherBook = {
    id: 2,
    title: "The old man and the sea",
    pubDate: "08/09/1952",
    author: {
      firstName: "Ernest",
      lastName: "Hemingway",
    },
};

// const {id, title, pubData, author} = anotherBook;
const {id, title, pubData, author: {firstName, lastName} } = anotherBook;
// console.log(author); // 중첩 객체를 바로 추출할 경우, author는 사용 불가

// 배열 디스트럭처링