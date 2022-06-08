
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Aboutus from './Pages/Aboutus';

function App() {
 return (
      <>
      <Router>
           <Switch>
                <Route exact='true' path='/' component={HomePage}/>
                <Route exact='true' path='/aboutus' compenent={Aboutus}/>
           </Switch>
      </Router>
      </>
       
 )
}

export default App;
