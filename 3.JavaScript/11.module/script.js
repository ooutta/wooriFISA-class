// 내 위치(script.js) 기준 외부(다른 파일, 다른 API, 코드 등)의 다른 것들을 가져올 때 import 키워드 사용
import { sum, sub, mul, division } from './function.js';

const x = 10;
const y = 5;

document.getElementById('add').textContent = sum(x, y);
document.getElementById('sub').textContent = sub(x, y);
document.getElementById('mul').textContent = mul(x, y);
document.getElementById('division').textContent = division(x, y);