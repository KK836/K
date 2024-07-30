// async 함수 myName을 정의합니다.
// 이 함수는 "Andy"라는 문자열을 반환합니다.
async function myName() {
  return "Andy";
}

// async 함수 showName을 정의합니다.
// 이 함수는 myName 함수를 호출하고 반환된 값을 출력합니다.

async function showName() {
  // myName 함수가 완료될 때까지 기다리고, 반환된 값을 name에 저장합니다.
  const name = await myName();
  // name 변수를 콘솔에 출력합니다.
  console.log(name);
}

// showName 함수를 호출하고 그 반환값을 콘솔에 출력합니다.
// showName은 비동기 함수이므로 Promis 객체를 반환합니다.

console.log(showName());

// waitOneSecond 함수를 정의합니다.
// 이 함수는 msg를 받아서 1초 후에 Promise가 완료됩니다.
function waitOneSecond(msg) {
  // Promise를 반환합니다. 1초 후에 resolve 함수가 호출됩니다.
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function conutOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log("완료");
}

conutOneToTen();
