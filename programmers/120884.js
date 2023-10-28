function solution(chicken) {
  // 서비스 치킨 주문 수
  let cnt = Math.floor(chicken / 10);
  // 남은 쿠폰의 수
  let coupon = cnt + (chicken % 10);

  while (coupon >= 10) {
    let service = Math.floor(coupon / 10);
    cnt += service;
    coupon = service + (coupon % 10);
  }
  return cnt;
}
