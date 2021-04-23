import React from 'react';
import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner'

function App() {
  return (
    <div className="App">
      <Banner />

      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romance movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentaris' fetchUrl={request.fetchDocumentaries} />

    </div>
  );
}

export default App;
