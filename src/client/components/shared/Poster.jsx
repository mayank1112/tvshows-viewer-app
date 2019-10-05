import React from 'react';
import PropTypes from 'prop-types';
import generateImageUrl from "../../utils/generateImageUrl"

const Poster = ({ path, title }) => (
    <img alt={title} src={generateImageUrl(path)} />
);

Poster.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Poster;