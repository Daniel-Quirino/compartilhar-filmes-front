import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Pages/Home/Home';
import SearchMovie from './Pages/SearchMovie';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

const Routes = (props) => {
    return (
        <Router>
            {props.searchMovie ? 
                <Route exact path="/" component={() => <SearchMovie searchMovie={props.searchMovie}/>} /> :
                <Route exact path="/" component={Home} />
            }
            <Route exact path="/entrar" component={Login} />
            <Route exact path ="/cadastrar" component={SignUp} />
        </Router>
    )
}

export default Routes;