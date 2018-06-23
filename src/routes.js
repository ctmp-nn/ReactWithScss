import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;