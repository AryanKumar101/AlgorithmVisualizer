import {Route, Routes} from 'react-router-dom';
import Landing from "./Landing.jsx";
import SortingPage from './SortingPage.jsx';
import Pathfinding from './Pathfinding.jsx';

function App() {
  
  return (
  <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/sorting' element={<SortingPage/>}></Route>
    <Route path='/pathfinding' element={<Pathfinding/>}></Route>
  </Routes>
  );
}

export default App;
