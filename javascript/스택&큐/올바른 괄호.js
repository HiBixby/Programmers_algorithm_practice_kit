function solution(s) {
  let cnt = 0;
  for (let x of s) {
    x === "(" ? cnt++ : cnt--;
    if (cnt < 0) return false;
  }
  return !cnt;
}

console.log(solution("()()"));
console.log(solution(")"));
