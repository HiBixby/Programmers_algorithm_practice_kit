function solution(clothes) {
  let dict = {};
  for (let [name, type] of clothes) {
    dict[type] = type in dict ? dict[type] + 1 : 2;
  }
  return (
    Object.values(dict).reduce((prev, cur) => {
      return prev * cur;
    }) - 1
  );
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
