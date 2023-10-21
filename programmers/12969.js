/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/12969
 */
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i += 1) {
    let str = "";
    for (let i = 0; i < a; i += 1) {
      str += "*";
    }
    console.log(str);
  }
});
