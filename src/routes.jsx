import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Voteconfirmed from './pages/VoteConfirmed';

function MainRoutes(){
     return(
          <Routes>
               <Route path='/prototype-votamostra' element={<Home/>}/>
               <Route path='/prototype-votamostra/vote-completed' element={<Voteconfirmed/>}/>
          </Routes>
     )
}

export default MainRoutes;