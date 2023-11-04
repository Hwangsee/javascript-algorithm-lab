function solution(s) {
  const arr = s.split("");
  if (arr[arr.length - 1] === "(") return false;

  let cnt = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "(") cnt += 1;
    else cnt -= 1;

    if (cnt < 0) return false;
  }
  return cnt === 0;
}
