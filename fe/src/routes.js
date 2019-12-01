import React from "react";
import {Switch, Route} from "react-router-dom";

import ListPage from "./components/pages/ListPage";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ListPage}/>
        </Switch>
    </div>
);
export default Routes;
