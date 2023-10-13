/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/12944
 */
function solution(arr) {
  let answer = 0;
  arr.forEach((x) => {
    answer += x;
  });
  answer = answer / arr.length;
  return answer;
}
