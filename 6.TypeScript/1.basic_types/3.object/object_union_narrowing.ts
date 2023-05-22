export {}

type CookieWithCompany = {
    name: string,
    company: string,
}

type CookieWithTaste = {
    name: string,
    taste: string,
}

type Cookie = CookieWithCompany | CookieWithTaste;

const firstCookie: Cookie = Math.random() > 0.5 
                    ? {name:' OREO', company: 'Nabisco'}
                    : {name: 'OREO', taste: 'Choco'};

console.log(firstCookie.name);

// firstCookie.company; // Taste 타입일 때는 company가 존재하지 않을 수 있기 때문에 에러 발생

// 타입 좁히기(Narrowing)

// firstCookie에 company 프로퍼티가 존재할 경우, 접근 가능
if('company' in firstCookie) {
    firstCookie.company;
}

if('taste' in firstCookie) firstCookie.taste;

// or
if('company' in firstCookie) {
    firstCookie.company;
} else { // CookieWithCompany 타입이 아니면 Taste 타입일 것
    firstCookie.taste;
}
