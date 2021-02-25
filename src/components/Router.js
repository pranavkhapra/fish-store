import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import NotFound from './NotFound'
import Home from './Home'
import Store from './Store'
export default class Router extends Component {
    render() {
        
        return (
            <>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/store/:idOfTheStore" component={Store}></Route>
                <Route exact component={NotFound}></Route>
            </Switch>
            </BrowserRouter> 
            </>
        )
    }
}
