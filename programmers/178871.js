/**
 * start : 21:35
 * end : 21:47
 * 레벨 1
 * -- 결과 : 일부 시간초과
 */
function solution1(players, callings) {
  // callings 배열을 돈다.
  // players에서 findIndex를 통해 callings의 index를 찾으면
  // players[idx]와 players[idx - 1]의 값을 바꾼다
  // 배열이 끝날 때까지 반복한다
  var answer = players;
  callings.forEach((x, i) => {
    const idx = players.findIndex((y) => y === x);
    const prevPlayers = players[idx - 1];
    answer[idx - 1] = answer[idx];
    answer[idx] = prevPlayers;
  });

  return answer;
}

// 오답 노트
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  players.forEach((name, index) => (idxList[name] = index));
  for (let call of callings) {
    idx = idxList[call];
    name1 = players[idx];
    name2 = players[idx - 1];
    idxList[call] -= 1;
    idxList[name2] += 1;
    players[idx] = name2;
    players[idx - 1] = name1;
  }

  return players;
}

// const players = ["mumu", "soe", "poe", "kai", "mine"];
// const callings = ["kai", "kai", "mine", "mine"];

// solution(players, callings);
