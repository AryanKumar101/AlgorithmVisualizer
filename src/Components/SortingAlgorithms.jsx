// src/components/SortingAlgorithms.jsx
export const mergeSort = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j, "compare"]); // Compare i and j
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i], "swap"]); // Put i in position k
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j], "swap"]); // Put j in position k
      mainArray[k++] = auxiliaryArray[j++];
    }
    animations.push([i, j, "revert"]); // Revert color after comparison
  }
  
  while (i <= middleIdx) {
    animations.push([i, i, "compare"]);
    animations.push([k, auxiliaryArray[i], "swap"]);
    animations.push([i, i, "revert"]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j, "compare"]);
    animations.push([k, auxiliaryArray[j], "swap"]);
    animations.push([j, j, "revert"]);
    mainArray[k++] = auxiliaryArray[j++];
  }
};
