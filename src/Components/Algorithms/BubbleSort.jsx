// src/components/BubbleSort.jsx
export const bubbleSort = (array) => {
    const animations = [];
    const n = array.length;
    let isSwapped;
    for (let i = 0; i < n - 1; i++) {
      isSwapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1, "compare"]); // Compare
        if (array[j] > array[j + 1]) {
          animations.push([j, array[j + 1], "swap"]); // Swap j with j+1
          animations.push([j + 1, array[j], "swap"]); // Swap j+1 with j
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          isSwapped = true;
        }
        animations.push([j, j + 1, "revert"]); // Revert color
      }
      if (!isSwapped) break;
    }
    return animations;
  };
  