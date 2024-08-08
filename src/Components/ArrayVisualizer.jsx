import '../Pages/SortingPage.css'

const max_height = 300;

function ArrayVisualizer({array}){
    const maxValue = Math.max(...array);

    return(<div className="array-container">
        <div className="array-bar-container">
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style = {{height: `${(value/maxValue)*max_height}px`}}>
                    </div>
            ))}
        </div>
    </div>);
}
export default ArrayVisualizer;