import React, { useState, useEffect, Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Signup from "./components/Signup"
import Login from "./components/Login"
import About from "./components/About"
import Welcome from './components/Welcome'
import Navbar from "./components/Navbar"
import Profile from './components/Profile'

const PrivateRoute = ({ component: Component, ...rest }) => {
  //get our user via jwt token to confirm user authenticated
  const user = localStorage.getItem('jwtToken')

  // setup a return based on 
  return <Route {...rest} render={(props) => (
    user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
  )}
  />
}

function App() {
  let [cuerrentUser, setCurrentUser] = useState('')
  let[isAuthenticated, seIsAuthenticated] = useState(false)

  useEffect(() => {
    let token
    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  // setting current user
  let nowCurrnetUser = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  // loging out current user
  let handleLogout = () => {
    if (localStorage.getItem('jwtToken') !=== null) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  console.log(`Current user is = ${currentUser}`)
  console.log(`Is user Authenticated? ${isAuthenticated}`)

  return (
    <div>
      <Navbar  handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      <div className="react-router-logic">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route path='/login' render={ (props)  => <Login {...props} nowCurrentUser={ nowCurrentUser } user={ currentUser } /> } />
          <Route path='/about' component={ About } />
          <PrivateRoute path='/profile' component={ Profile } user={ currentUser } />
          <Route path='/' component={ Welcome } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
