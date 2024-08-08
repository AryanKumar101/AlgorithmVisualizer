
function Navbar({onInitArray, onChangeSize, onRandomizeArray, onStartSort, arraySize, onChangeSpeed, speed, onChangeAlgorithm, selectedAlgorithm}){

    return(
        <nav>
            <button onClick={onInitArray}>Initialize Array</button>
            <div className="size-container">
                <p>Array Size: {arraySize}</p>
                <input type='range' min='5' max='100' value={arraySize} onChange={onChangeSize} />
            </div>
            <div className="size-container">
                <p>Speed: {speed}</p>
                <input type="range" min='1' max='10' onChange={onChangeSpeed} value={speed} ></input>
            </div>
            <div className="size-container">
                <p>Algorithm: </p>
                <select value={selectedAlgorithm} onChange={onChangeAlgorithm}>
                <option value="mergeSort">Merge Sort</option>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="quickSort">Quick Sort</option>
                </select>
            </div>
            <button onClick={onRandomizeArray}>Randomize Array</button>
            <button onClick={onStartSort}>Start Sort</button>
        </nav>
    );
}

export default Navbar;