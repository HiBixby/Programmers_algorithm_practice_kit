function solution(progresses, speeds) {
  let days = progresses.map((progress,i)=>Math.ceil((100-progress)/speeds[i]));
  let answer = [0];
  let max = days[0];
  let release = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] <= max) {
      answer[release]++;
    } else {
      answer[++release] = 1;
      max = days[i];
    }
  }
  return answer;
}
console.log("answer is : ", solution([93, 30, 55], [1, 30, 5]));
