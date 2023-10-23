/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12933
 */
function solution(n) {
  const arr = n.toString().split("");
  arr.sort((a, b) => {
    return b - a;
  });
  return Number(arr.join(""));
}
