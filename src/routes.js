import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Pages/Home/Home';
import SearchMovie from './Pages/SearchMovie';
import Login from './Pages/Login/Login'

const Routes = (props) => {
    return (
        <Router>
            {props.searchMovie ? 
                <Route exact path="/" component={() => <SearchMovie searchMovie={props.searchMovie}/>} /> :
                <Route exact path="/" component={Home} />
            }
            <Route exact path="/login" component={Login} />
        </Router>
    )
}

export default Routes;