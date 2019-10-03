import React from "react";
import PropTypes from 'prop-types';
import urls from "../../constants/urls"
import "../../css/sainsburysTheme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Poster from "../shared/Poster";
import Rating from "../shared/Rating";
import intl from "../../locale/enUk";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./Data";

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
    const { id, title, overview, poster_path, vote_average, genres, production_companies } = this.state.tvShow;
    const { genresLabel, companiesLabel } = intl;
    if(id) {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="tvShowPoster">
                                <div>{poster_path && <Poster title={title} path={poster_path} />}</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="tvShowOverview">
                                <h3>{title}</h3>
                                <div><Rating title={title} votes={vote_average} /></div>
                                <small>{overview}</small>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h1>{genresLabel}</h1></Col>
                        <Col><h1>{companiesLabel}</h1></Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                genres.length > 0
                                && genres.map(
                                    genre => <Data type="GENRE" key={genre.id} name={genre.name} />
                                )
                            }
                        </Col>
                        <Col>
                            {
                                production_companies.length > 0
                                && production_companies.map(
                                    company => <Data type="COMPANY" key={company.id} name={company.name} />
                                )
                            }
                        </Col>
                    </Row>
                </Container>
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
