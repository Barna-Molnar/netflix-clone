import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <header className="banner">
      <div className="banner__contetns">
        <h1></h1>
      </div>
    </header>
  );
}

export default Banner;
