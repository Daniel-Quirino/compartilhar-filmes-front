import React from 'react'
import {HashRouter, Route, Redirect} from 'react-router-dom'

import Home from './Pages/Home/Home';
import SearchMovie from './Pages/SearchMovie';

export default props => (
    <HashRouter>
        {props.searchMovie ? 
        <Route path='/' component={() => <SearchMovie searchMovie={props.searchMovie}/>} /> :
        <Route path='/' component={Home} />}
        <Redirect from='*' to='/' />
    </HashRouter>
)