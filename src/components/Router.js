import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StorePicker from './StorePicker'
import App from './App'
import NotFound from './NotFound'

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route exact path="/store/:storeid" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    ) 
}
