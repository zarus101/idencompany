import React from 'react'
import { Route } from 'react-router-dom'
import {Router, Switch} from "react-router-dom"
import HomePage from './Pages/HomePage'

const Routes = () => {
  return (
      <Router>
          <Switch>
              <Route exact='true' path='/' component={HomePage}/>
          </Switch>
      </Router>

  )
}

export default Routes