import React from "react";
import PropTypes from 'prop-types';
import TvShowItem from "./TvShowItem";

const GridView = ({ tvShows }) => (
    tvShows.length > 0
    && tvShows.map(
        tvShow => <TvShowItem key={tvShow.id} tvShow={tvShow} />
    )
);

GridView.propTypes = {
    tvShows: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GridView;