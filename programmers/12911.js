// 효율성 조건 실패
// function solution(s) {
//   let word = s;
//   let lt = 0;
//   let rt = 1;
//   while (rt <= word.length) {
//     if (word[lt] === word[rt]) {
//       word = word.replace(word[lt] + word[rt], "");
//       console.log("word:", word);
//       lt = lt <= 0 ? 0 : lt - 1;
//       rt = rt <= 1 ? 1 : rt - 1;
//     } else {
//       lt += 1;
//       rt += 1;
//     }
//     if (word === "") break;
//     if (word[rt] === undefined || rt > 1000000) {
//       break;
//     }
//   }
//   return word.length === 0 ? 1 : 0;
// }

// 풀이 참고하여 문제 풀기
function solution(s) {
  const arr = s.split("");
  const stack = [];
  // for in보다는 for문이 효율성 점수 잘 나옴.
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    // Array.prototype.at은 정숫값을 받아 인덱스에 있는 항목을 반환한다.
    // 음의 정수는 배열의 마지막 항목부터 거슬러 센다.
    if (arr[i] === stack.at(-1)) stack.pop();
    else stack.push(arr[i]);
  }
  return stack.length === 0 ? 1 : 0;
}
