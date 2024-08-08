
function Navbar({onInitArray, onChangeSize, onRandomizeArray, onStartSort, arraySize, onChangeSpeed, speed}){

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
            
            <button onClick={onRandomizeArray}>Randomize Array</button>
            <button onClick={onStartSort}>Start Sort</button>
        </nav>
    );
}

export default Navbar;