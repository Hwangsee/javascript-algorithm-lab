/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181935
 */
function solution(n) {
  let result = 0;
  if (n % 2 === 1) {
    for (i = 1; i <= n; i += 2) {
      result += i;
    }
  } else {
    for (i = 2; i <= n; i += 2) {
      const temp = i * i;
      result += temp;
    }
  }
  return result;
}
