import Navbar from "./Components/Navbar.jsx";
import ArrayVisualizer from "./Components/ArrayVisualizer.jsx";
import './Pages/SortingPage.css'
import { mergeSort } from "./Components/SortingAlgorithms.jsx";
import { useState, useEffect } from "react";

const max_height = 300;
const SortingPage = () =>{
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(50);
    const [speed, setSpeed] = useState(10);

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

    const startSort = () => {
        const animations = mergeSort(array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * (13-speed)*5/3);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${(newHeight / 500) * max_height}px`; // Normalize height within max height
            }, i * (13-speed)*5/3);
          }
        }
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
        speed = {speed}/>

        <ArrayVisualizer array={array}/>
    </div>);   
}

export default SortingPage;