/**
 * 레벨 1 https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */
function solution(sizes) {
  let max1,
    max2 = 0;
  if (sizes[0][0] > sizes[0][1]) {
    max1 = sizes[0][0];
    max2 = sizes[0][1];
  } else {
    max1 = sizes[0][1];
    max2 = sizes[0][0];
  }

  for (let i = 1; i < sizes.length; i++) {
    const num1 = sizes[i][0];
    const num2 = sizes[i][1];

    if (num1 > num2) {
      if (max1 < num1) max1 = num1;
      if (max2 < num2) max2 = num2;
    } else {
      if (max1 < num2) max1 = num2;
      if (max2 < num1) max2 = num1;
    }
  }
  return max1 * max2;
}
