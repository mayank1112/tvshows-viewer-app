This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Preinstalled libs

- react-router-dom
- redux
- react-redux
- redux-thunk
- styled-components
- axios
- enzyme
- jest-enzyme
- @testing-library/react
- @testing-library/jest-dom

## Requirements

- Routing
  - react-router-dom is preinstalled but feel free to install other preferred library
- To have some sort of state management
  - redux and react-redux is preinstalled but feel free to install other preferred library. Context API is valid too.
- Styling:
  - The​ ​site​ ​should​ ​be​ ​at least responsive.
    - Just Desktop & Mobile.
  - Any styling improvements are welcome
- Unit Tests:
  - Not needed to test all components, one is enough.
  - enzyme and jest-enzyme is preinstalled
  - @testing-library/react and @testing-library/jest-dom is preinstalled
- Extra:
  - Any type of performance​ ​optimization.

## Notes

- The use of any libraries is allowed
- The use of any documentation is allowed (meaning free access to internet)
- In terms of styling, the fact that it's responsive is far more important than it looks good.

## After questions:

- What are other possible improvements?
- How do you implement E2E testing? Which tool would you use?
- In what direction would you take the application both technically and graphically?

### APIs

Movies:

`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

Movie:

`https://api.themoviedb.org/3/movie/{{id}}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`

POSTER IMG PATH ROOT:

`https://image.tmdb.org/t/p/w300`
