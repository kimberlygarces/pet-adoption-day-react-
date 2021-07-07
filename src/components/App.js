import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layaut from './Layaut';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import index from '../pages/index';



function App(){
    return (
        <BrowserRouter>
        <Layaut>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
                <Route exact path="/" component={index}/>
                <Route component={NotFound}/>

            </Switch>
        </Layaut>
    </BrowserRouter>
    );
}

export default App;