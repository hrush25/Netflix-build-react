import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";


function Banner() {
  // setting movies on banner
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) //selecting a random  movie from netflix originals
        ]
      );
      return request; //good practice to close off with returning requests
    }
    fetchData();
  }, []);

  console.log(movie);

  // if description too long (more than passed characters), only show n characters followed by dot-dot...
  function truncate(string, n) {
    if (string?.length > n) {
      return string.substr(0, n - 1) + "....";
    } else {
      return string;
    }
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //TMDB has defined a default way of getting image which is
        //the link in url, with that link we're concatenating movies variable and taking image through backdrop_path(which is json attribute where all
        //information given (check console log))
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner__description">
          {/* truncate description after 150 chars */}
          {truncate(`${movie?.overview}`, 150)}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button fas fa-play">Play</button>
          <button className="banner__button">More Info</button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
