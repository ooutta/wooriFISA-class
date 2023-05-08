// 2. 이벤트 핸들러 프로퍼티 방식
const evPropButton = document.getElementById('btn-ev-prop');

// 클릭 이벤트 발생 시 동작시킬 함수
const eventHandler = () => console.log('button clicked!!')

// onclick 프로퍼티에 evenetHandelr 함수를 값으로 할당
evPropButton.onclick = eventHandler;

// console.log(evPropButton.onclick)
// > () => console.log('button clicked!!')


// 3. addEventListner 방식
const addEvLsnrButton = document.getElementById('btn-add-ev-lsnr');

// function buttonHandler() {
//     console.log('button clicked~~');
// }

// 화살표 함수로 변경
const buttonHandler = () => console.log('button clicked~~');

// addEventListener(이벤트 타입, 콜백함수)
addEvLsnrButton.addEventListener("click", buttonHandler);

// 이벤트 제거하는 방법, 이벤트 전파/버블링 공부해보기

