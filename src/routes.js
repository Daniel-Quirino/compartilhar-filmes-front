import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home/Home';
import SearchMovie from './Pages/SearchMovie';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import MovieInfo from './Pages/movieInfo';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                {props.searchMovie ? 
                    <Route exact path="/" component={() => <SearchMovie searchMovie={props.searchMovie} loggedUser={props.loggedUser}/>} /> :
                    <Route exact path="/" component={() => <Home loggedUser={props.loggedUser}/>} />
                }
                <Route exact path="/entrar" component={() => <Login loggedUser={props.loggedUser} setLoggedUser={props.setLoggedUser}/>} />
                <Route exact path ="/cadastrar" component={() => <SignUp loggedUser={props.loggedUser}/>} />
                <Route exact path ="/perfil/:userId" component={() => <Profile loggedUser={props.loggedUser}/>} />
                <Route exact path ="/movies/:movieId" component={() => <MovieInfo loggedUser={props.loggedUser}/>} />
            </Switch>
        </Router>
    )
}

export default Routes;