import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "./client/components/Home/Home";
import Header from "./client/components/shared/Header";
import TvShowDetails from "./client/components/TvShowDetails/TvShowDetails";
import paths from "./client/constants/paths";

ReactDOM.render(
    (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path={paths.homePage} exact component={Home} />
                <Route path={paths.tvShowDetailsPage} component={TvShowDetails} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById("root"),
    );
