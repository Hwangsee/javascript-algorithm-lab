/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/87389
 */
function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let flag = n % i;
    if (flag === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}
