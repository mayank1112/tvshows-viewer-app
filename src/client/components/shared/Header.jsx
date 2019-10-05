import React from "react";
import intl from "../../locale/en-UK";
import { Link } from "react-router-dom";
import urls from "../../constants/urls";

export default () => (
    <Link to={urls.home}>
        <h1>{intl.heading}</h1>
    </Link>
);