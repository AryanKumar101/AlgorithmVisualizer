import ParticlesBackground from "./Components/ParticlesBackground.jsx";
import {Link} from 'react-router-dom';
import './index.css'
import Card from "./Components/Card.jsx";
import sorting from './Components/sorting.gif'
import pathfinding from './Components/pathfinding.gif'


const Landing = () => {
    return(
    <div className="wrapper">
     <ParticlesBackground/>
     <div className="content">
      <h1>Algorithm Visualizer</h1>
      <p>See algorithms come to life! Explore interactive visualizations and gain a deeper understanding of how they work.</p>
        <Link to='/sorting'><Card image={sorting} name="Sorting Algorithms"/></Link>
        <Link to='/pathfinding'><Card image={pathfinding} name='Pathfinding Algorithms'/></Link>
     </div>
    </div>
);
}
export default Landing;