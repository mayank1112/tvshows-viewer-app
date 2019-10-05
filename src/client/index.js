import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/shared/Header";
import TvShowDetails from "./components/TvShowDetails/TvShowDetails";
import paths from "./constants/paths";

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
