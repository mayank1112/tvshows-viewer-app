import React from 'react';
import PropTypes from 'prop-types';
import "../../css/sainsburysTheme.css";
import { FaUserCircle } from 'react-icons/fa';

const Data = ({ name, type }) => (
    <div className="data">
        <b>{type === 'COMPANY' && <FaUserCircle />}</b>
        {name}
    </div>
);

Data.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'GENRE',
        'COMPANY',
    ]).isRequired,
};

export default Data;