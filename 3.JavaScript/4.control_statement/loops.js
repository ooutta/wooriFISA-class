// 1
for(let index = 0; index <5; index++) {
    console.log(`index ${(index + 1)}번 반복`);
}

// 2
const rainbow = 'rainbow';
for(let i = 0; i < rainbow.length; i++) {
    console.log(rainbow.charAt(i));
}

// 3
const foods = ['apple', 'orange-cookie', 'avacado', 'plum'];
let favorite = '내가 좋아하는 음식은..';
for(let i = 0; i < foods.length; i++) {
    // console.log(foods[i]);
    // if(i < foods.length - 1) {
    //     favorite += foods[i] + ", ";
    // } else {
    //     favorite += '그리고 ' + foods[i];
    // }

    if(i === foods.length - 1) {
        favorite += '그리고 ' + foods[i];
    } else {
        favorite += foods[i] + ", ";
    }
}
console.log(favorite);

// 배열 마지막 요소 접근
// console.log(foods.at(-1));

// 4
const fruits = ['apple', 'banana', 'coconut'];
fruits.forEach((fruit) => console.log(fruit));