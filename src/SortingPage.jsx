import Navbar from "./Components/Navbar.jsx";
import ArrayVisualizer from "./Components/ArrayVisualizer.jsx";
import './Pages/SortingPage.css'
import { mergeSort } from "./Components/SortingAlgorithms.jsx";
import { bubbleSort } from "./Components/Algorithms/BubbleSort.jsx";
import { quickSort } from "./Components/Algorithms/QuickSort.jsx";
import { useState, useEffect } from "react";

const max_height = 300;
const SortingPage = () =>{
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(50);
    const [speed, setSpeed] = useState(10);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("mergeSort");

    const initArray = () => {
        const newArray = Array.from({length: arraySize}, () => Math.floor(Math.random() * 500));
        setArray(newArray);
    };

    useEffect(() =>{
        initArray();
    }, [arraySize]);

    const changeSize = (event) => {
        setArraySize(event.target.value);
    }

    const randomizeArray = () => {
        initArray();
    };

    const changeSpeed = (event) =>{
      setSpeed(event.target.value);
    };

    const changeAlgorithm = (event) => {
      setSelectedAlgorithm(event.target.value);
    };

    const startSort = () => {
      let animations;
      if (selectedAlgorithm === "mergeSort") {
        animations = mergeSort(array);
      } else if (selectedAlgorithm === "bubbleSort") {
        animations = bubbleSort(array);
      } else if (selectedAlgorithm === "quickSort") {
        animations = quickSort(array);
      }
    
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoOrHeight, action] = animations[i];
        
        if (action === "compare" || action === "revert") {
          const color = action === "compare" ? 'red' : 'turquoise';
          setTimeout(() => {
            arrayBars[barOneIdx].style.backgroundColor = color;
            if (barTwoOrHeight !== undefined) {
              arrayBars[barTwoOrHeight].style.backgroundColor = color;
            }
          }, i * (13 - speed) * 5 / 3);
        } else if (action === "swap") {
          setTimeout(() => {
            arrayBars[barOneIdx].style.height = `${(barTwoOrHeight / 500) * max_height}px`;
          }, i * (13 - speed) * 5 / 3);
        }
      }
    
      // Reset all bars to the default color after the sorting is complete
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
          arrayBars[i].style.backgroundColor = 'turquoise';
        }
      }, animations.length * (13 - speed) * 5 / 3);
    };
        

      //(1, 10) -> (20, 5)


    return(<div>
        <Navbar
        onInitArray={initArray}
        onChangeSize={changeSize}
        arraySize = {arraySize}
        onRandomizeArray={randomizeArray}
        onStartSort={startSort}
        onChangeSpeed={changeSpeed}
        speed = {speed}
        onChangeAlgorithm={changeAlgorithm}
        selectedAlgorithm={selectedAlgorithm}/>

        <ArrayVisualizer array={array}/>
    </div>);   
}

export default SortingPage;