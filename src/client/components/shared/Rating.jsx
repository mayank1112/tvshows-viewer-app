import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from "react-star-rating-component";
import generateRating from "../../utils/generateRating";

const Rating = ({ votes, title }) => (
    <StarRatingComponent name={title} value={generateRating(votes)} />
);

Rating.propTypes = {
    votes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default Rating;


