import PropTypes from 'prop-types';
import React from "react";
import { Link } from "react-router-dom";
import urls from "../../constants/urls";
import Poster from "../shared/Poster";
import Rating from "../shared/Rating";

const TvShowItem = ({ tvShow: { id, title, poster_path, vote_average } }) => (
    <div className="tvShow">
        <div><Poster title={title} path={poster_path} /></div>
        <div><Rating title={title} votes={vote_average} /></div>
        <Link to={urls.showDetailsPage(id)}>{title}</Link>
    </div>
);

TvShowItem.propTypes = {
    tvShow: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
};

export default TvShowItem;