import React from "react";
import "../../css/sainsburrysTheme.css";
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
    return (
        <React.Fragment>
          <h1>{intl.heading}</h1>
          <h2>{intl.bannerTitle}</h2>
          <h2>{intl.bannerSubTitle}</h2>
          <h3>{intl.homePageTitle}</h3>
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
