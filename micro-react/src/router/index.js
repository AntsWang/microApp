
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import Work from '../pages/work'
import Knowledeg from '../pages/knowledge'

import RouterConfig from './router-config';


function Router() {
    return (
  
            <Switch>
                {
                    RouterConfig.map((route, index) => {
                        return <Route key={index} path={route.path} component={route.component} />
                    })
                }
                <Redirect to="/work" />
                {/* <Route  component={NoMatch} /> */}
            </Switch>
    );
}

export default Router;

