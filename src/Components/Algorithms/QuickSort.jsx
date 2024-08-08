// src/components/QuickSort.jsx
export const quickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  };
  
  const quickSortHelper = (array, low, high, animations) => {
    if (low < high) {
      const pivotIndex = partition(array, low, high, animations);
      quickSortHelper(array, low, pivotIndex - 1, animations);
      quickSortHelper(array, pivotIndex + 1, high, animations);
    }
  };
  
  const partition = (array, low, high, animations) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      animations.push([j, high, "compare"]); // Compare with pivot
      if (array[j] <= pivot) {
        i++;
        animations.push([i, array[j], "swap"]); // Swap i with j
        animations.push([j, array[i], "swap"]); // Swap j with i
        [array[i], array[j]] = [array[j], array[i]];
      }
      animations.push([j, high, "revert"]); // Revert color
    }
    animations.push([i + 1, array[high], "swap"]); // Swap pivot to correct position
    animations.push([high, array[i + 1], "swap"]); // Swap high with i+1
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  };
  