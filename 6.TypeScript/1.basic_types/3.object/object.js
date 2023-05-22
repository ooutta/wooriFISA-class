const dog = {
    age: 2,
    name: 'toto',
    walk: function walk() {
        console.log('강아지가 걷는다');
    }
};
console.log(dog.age);
// dog.color = 'brown'; // js에서는 됐지만 ts에서는 불가능
// 프로퍼티 동적 추가 불가능 - 타입스크립트는 일반적으로 정적 타입 시스템 기반이기때문에
// 사전에 정의된 타입만 사용 가능, 동적으로 추가되는 프로퍼티 인식 불가
// -> 추가 방법: 인덱싱 가능 타입 사용(indexable)
let cat = {};
cat.name = '냐옹';
cat.age = 2;
console.log(cat);
// 특정 객체의 타입을 선언
// 사자는 항상 age와 name을 가지고 있다.
let lion;
// lion = {};
lion = { age: 2, name: '라이언' };
// 옵셔널(optional) 프로퍼티(? 기호 사용)
let tiger;
tiger = { age: 3 }; // name 프로퍼티는 선택이기때문에 작성하지 않아도 됨
let firstCookie; // firstCookie의 타입은 Cookie
firstCookie = {
    name: 'OREO',
    pubDate: 1913,
    company: 'Nabisco'
};
let secondCookie;
secondCookie = {
    name: 'HERSHEY',
    pubDate: 1894,
    company: 'HERSHEY'
};
console.log(firstCookie);
