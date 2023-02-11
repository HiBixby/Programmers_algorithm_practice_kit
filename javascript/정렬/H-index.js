function solution(citations) {
  let max = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      max++;
    }
  }
  return max;
}

console.log(solution([3, 0, 6, 1, 5]));
