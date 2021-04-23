import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code wich rund based on specific conditions
  useEffect(() => {
    //if [] =>  leave blank, run once  when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>


    </div>
  );
}

export default Row;