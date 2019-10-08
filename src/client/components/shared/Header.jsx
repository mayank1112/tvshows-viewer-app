import React from "react";
import intl from "../../locale/en-UK";
import { Link } from "react-router-dom";
import urls from "../../constants/urls";

const get = async (url) => {
    let response = await fetch(url);
    return await response.json();
};
const App = async () => {
    return await get("http://mayanks-macbook:8443/index.js");
};

export default () => (
    <Link to={urls.home}>
        <h1>{intl.heading}</h1>
        <App />
    </Link>
);