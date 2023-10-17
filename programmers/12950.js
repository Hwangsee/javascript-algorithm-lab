/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/12950
 */

function solution(arr1, arr2) {
  let answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length));
  arr1.forEach((a, i) => {
    arr1[i].forEach((b, j) => {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    });
  });
  return answer;
}
