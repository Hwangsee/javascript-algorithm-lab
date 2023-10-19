/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
function solution(t, p) {
  const len = p.length;
  let arr = [];
  for (let i = 0; i <= t.length - len; i++) {
    const temp = t.substr(i, len);
    if (Number(p) >= Number(temp)) arr.push(temp);
  }
  return arr.length;
}
