import React from "react";
import "../../css/sainsburysTheme.css";
import urls from "../../constants/urls"
import GridView from './GridView';
import intl from '../../locale/en-UK.js';
import get from '../../utils/get';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tvShows: [] };
  }

  componentDidMount = async() => {
    const tvShowsInfo = await get(urls.shows);
    this.setState({ tvShows: tvShowsInfo.results });
  };

  render() {
    const { tvShows } = this.state;
    const { bannerTitle, bannerSubTitle, homePageTitle } = intl;
    return (
        <React.Fragment>
          <h2>{bannerTitle}</h2>
          <h2>{bannerSubTitle}</h2>
          <h3>{homePageTitle}</h3>
          <GridView tvShows={tvShows} />
        </React.Fragment>
    );
  }
}

export default Home;
