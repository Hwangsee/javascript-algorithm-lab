function solution(s) {
  // 공백으로 구분된 숫자들 중 최소값, 최대값을 찾아 (최소감) (최대값) 형태로 리턴
  let arr = s.split(" ");
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return `${min} ${max}`;
}
