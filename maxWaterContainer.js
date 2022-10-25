const arr = [4,8,1,2,3,9];

const getMaxArea = function (heights) {

  let p1 = 0;
  let p2 = heights.length - 1;
  let max = 0;

  while (p1 < p2) {
    let h = Math.min(heights[p1], heights[p2]);
    let w = p2 - p1;
    let area = h * w;
    max = Math.max(area, max);

    if (heights[p1] > heights[p2]) {
      p2--;
    } else {
      p1 ++;
    }

  }
  return max;

}

console.log(getMaxArea(arr));