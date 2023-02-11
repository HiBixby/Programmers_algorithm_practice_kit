function solution(sizes) {
  let mw = 0;
  let mh = 0;
  for (let size of sizes) {
    let w = Math.max(...size);
    let h = Math.min(...size);
    mw = mw < w ? w : mw;
    mh = mh < h ? h : mh;
  }
  return mw * mh;
}
