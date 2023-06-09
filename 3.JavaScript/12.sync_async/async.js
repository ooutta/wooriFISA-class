// 2. 비동기 방식(Asynchronous)

/**
 * 현재 실행 중인 작업(Task)가 아직 종료되지 않은 상태라고 해도, 다음 작업을 곧바로 실행하는 방식
 */

function firstWork() {
    console.log('첫 번째 작업 진행 중');
}

function secondWork() {
    console.log('두 번째 작업 진행 중');
}

// setTimeout(callback, 시간); // 지정한 시간 이후에 코드를 수행하도록 동작
setTimeout(firstWork, 3 * 1000);
secondWork();
