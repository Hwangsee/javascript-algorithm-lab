/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */
const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  // 그리운 사람 이름 배열
  // 그리움 점수 배열
  // 사진에 찍힌 이름을 담은 이차원 문자열 배열
  let answer = [];

  const missList = {};
  name.forEach((name, idx) => (missList[name] = yearning[idx]));

  for (let i = 0; i < photo.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j += 1) {
      // ["kein", "deny", "may"] 키 값으로 그리움 점수를 가져온다
      const name = photo[i][j];
      const score = missList[name];
      if (score !== undefined) sum += score;
    }
    answer[i] = sum;
  }

  return answer;
}

solution(name, yearning, photo);
