function solution(s) {
  const words = s.split("");
  let flag = true;
  const jadenCase = words.map((x) => {
    if (x === " ") {
      flag = true;
      return x;
    } else if (flag) {
      flag = false;
      return x.toUpperCase();
    } else {
      return x.toLowerCase();
    }
  });
  return jadenCase.join("");
}
