
function Card(props){
    return(
        <div className="card">
            <img src={props.image} className="card-image"></img>
            <h2 className="card-title">{props.name}</h2>
        </div>
    );
}
export default Card;