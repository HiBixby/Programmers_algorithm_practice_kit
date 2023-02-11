function solution(answers) {
  let types = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = [0, 0, 0];
  let returnValue = [];
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    for (let j = 0; j < types.length; j++) {
      let selected = types[j][i % types[j].length];
      if (selected === answer) {
        score[j]++;
      }
    }
  }
  let max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) {
      returnValue.push(i + 1);
    }
  }
  return returnValue;
}
