import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar'
import './App.css'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
