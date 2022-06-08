import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Aboutus from './Pages/Aboutus';

function App() {
 return (
      
      <Router>
           <Switch>
                <Route  path='/' component={HomePage}/>
                <Route  path='/aboutus' component={Aboutus}/>
           </Switch>
      </Router>
    
       
 )
}

export default App;
