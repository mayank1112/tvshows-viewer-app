import React from "react";
import "../../css/sainsburysTheme.css";
import urls from "../../constants/urls"
import TvShowItem from './TvShowItem';
import intl from '../../locale/enUk.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tvShows: [] };
  }
  componentDidMount() {
    fetch(urls.shows)
        .then(response => response.json())
        .then(tvShows => this.setState({tvShows: tvShows.results}));
  }
  render() {
    const { tvShows } = this.state;
    const { bannerTitle, bannerSubTitle, homePageTitle } = intl;
    return (
        <React.Fragment>
          <h2>{bannerTitle}</h2>
          <h2>{bannerSubTitle}</h2>
          <h3>{homePageTitle}</h3>
          {
            tvShows.length > 0
                && tvShows.map(
                    tvShow => <TvShowItem key={tvShow.id} tvShow={tvShow} />
                )
          }
        </React.Fragment>
    );
  }
}

export default Home;
