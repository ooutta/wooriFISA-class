// 번역할 텍스트를 js로 가져오기
// source ~ : 번역할 텍스트, 번역할 언어의 타입(ko, ja..)
// target ~ : 번역 결과 텍스트, 번역될 언어의 타입(ko, ja..)

const [sourceSelect, targetSelect] = document.getElementsByClassName('form-select');
const [sourceTextArea, targetTextArea] = document.getElementsByClassName('textarea');

let targetLanguage = 'en'; // 번역될 언어의 타입, 초기값은 en(Engllish)

//변역될 언어의 타입 변경 이벤트
// English면 en 출력, 한국어면 ko 출력되도록
targetSelect.addEventListener('change', (event) => {
    // console.log(event.target.value); // select 박스의 option 태그 내 value 어트리뷰트 값을 취득
    targetLanguage = event.target.value;

})

// 번역할 텍스트 값 입력받는 이벤트
// 디바운싱 & 쓰로틀링
let debouncer; // timerId 값을 저장하는 변수
sourceTextArea.addEventListener('input', (event) => {
    if(debouncer) clearTimeout(debouncer);
    
    debouncer = setTimeout(async () => {
        const text = event.target.value; // 번역할 텍스트

        /*
          서버에 HTTP 요청 전송을 위한 준비 코드
          1. 요청 URL
          2. 전송 데이터: HTTP Body(몸체)에 작성
          3. 몇 가지 메타정보: HTTP Header에 작성
         */

        
        const result = await detectLanguage(text);
        console.log(result);

        translateLanguage(result, text);
    }, 2000); // 2초 후에 콜백 함수 동작
});


const detectLanguage = async (text) => {
    let sourceLanguage;
    
    // 첫 번째 요청 : 언어 감지 기능 -? server.js(Node서버)로 전송
    const url = '/detect';
        
    const body = optionsFrom('POST', {query: text});

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: text}),
    }

    await fetch(url, body) // axios 라이브러리 사용 시 json 처리 추상화
    .then(response => response.json())
    .then(data => {
        sourceLanguage = data.langCode;
        changeLanguage(sourceLanguage);
        sourceSelect.value = sourceLanguage;
        targetSelect.value = targetLanguage;
    })
    .catch(error => console.error(error));
    
    return sourceLanguage;
}

const translateLanguage = async (sourceLanguage, text) => {
    // 언어 번역 요청
    const translateUrl = '/translate';
    

    const body = {
        source: sourceLanguage, 
        target: targetLanguage, 
        text,
    }
    
    await fetch(translateUrl, optionsFrom('POST', body)) // axios 라이브러리 사용 시 json 처리 추상화
    .then(response => response.json())
    .then(data => {
        targetTextArea.textContent = data.message.result.translatedText;
    })
    .catch(error => console.error(error));
}


// 유틸 메서드
const optionsFrom = (method, body, headers) => {
    return { // 리터럴 형태로 바로 반환
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body),
    };
}

// 언어 자동 변경 기능
const changeLanguage = (sourceLanguage) => {
    if (sourceLanguage === targetLanguage) { // 원본 언어와 타겟 언어가 서로 같고,
        if (sourceLanguage === 'ko') { // 원본 언어가 한국어일 경우
            targetLanguage = 'en'; // 타겟 언어를 영어로 변경
        } else { // 원본 언어가 한국어가 아닐 경우
            targetLanguage = 'ko'; // 타겟 언어를 한국어로 변경
        }
    }
}