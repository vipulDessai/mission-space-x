import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { App } from './App';

ReactDOM.hydrate(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Redirect to="/"></Redirect>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

module.hot.accept();