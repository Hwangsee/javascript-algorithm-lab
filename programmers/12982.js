/**
 *
 * 레벨 1 : https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * d : 부서별 신청 금액 배열
 *  - 길이 : 1 ~ 100
 *  - 금액 : 1 ~ 100,000
 * budget : 예산
 *  - 1 ~ 10,000,000
 **/
function solution(d, budget) {
  let cnt = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i += 1) {
    sum += d[i];
    if (sum > budget) break;
    else {
      cnt += 1;
    }
  }

  return cnt;
}
