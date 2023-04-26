//1. 선택박스(Select box)와, "결과;" 부분에 해당하는 HTML Tag들을 JS 코드로 불러온다.
const selectButton = document.querySelector('select');
console.log(selectButton);

const paragraph = document.querySelector('p');
console.log(paragraph);

//2. 선택박스에게 선택지 중 하나 선택되면 js에 알려줌
selectButton.addEventListener('change', setResult);

//3. 선택박스가 js에 알려주면, 조건에 따라 작업 수행
function setResult() {
    const choice = selectButton.value;
    if(choice === 'one') {
        paragraph.textContent = "하늘에서 천사가 내려와 쿠키를 한 박스 주고 갔다."
    } else if(choice === 'two') {
        paragraph.textContent = "이 과자가 뭐라고... 엄마한테 혼났다..."
    } else if(choice === 'random') {
        paragraph.textContent = "안 돼"
    } else {
        paragraph.textContent = "선택해주세요."
    }
}

//미션 : "결과:" 부분에 원하는 텍스트 리턴
