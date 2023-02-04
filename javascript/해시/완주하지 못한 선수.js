function solution(participant, completion) {
  let participantDict = {};
  participant.forEach((name) => {
    participantDict[name] =
      name in participantDict ? participantDict[name]++ : 1;
  });

  completion.forEach((name) => {
    participantDict[name] === 1
      ? delete participantDict[name]
      : participantDict[name]--;
  });
  return Object.keys(participantDict)[0];
}

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];
console.log(solution(participant, completion));
