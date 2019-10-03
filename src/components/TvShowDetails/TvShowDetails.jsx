import React from "react";
import PropTypes from 'prop-types';
import urls from "../../constants/urls"
import "../../css/sainsburrysTheme.css";
import Poster from "../shared/Poster";
import Rating from "../shared/Rating";

class TvShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tvShow: {} };
  }

  componentDidMount() {
    fetch(urls.show(this.props.match.params.showId))
        .then(response => response.json())
        .then(tvShow => this.setState({ tvShow } ));
  }

  render() {
    const { id, title, overview, poster_path, vote_average } = this.state.tvShow;
    if(id) {
        return (
            <React.Fragment>
                <div className="tvShowPoster">
                    <div>{poster_path && <Poster title={title} path={poster_path} />}</div>
                </div>
                <div className="tvShowOverview">
                    <h3>{title}</h3>
                    <div><Rating title={title} votes={vote_average} /></div>
                    <small>{overview}</small>
                </div>
            </React.Fragment>
        );
    }
    return null;
  }
}

TvShowDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            showId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default TvShowDetails;
