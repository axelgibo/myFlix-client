import React from "react";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <h3>{movie.Title}</h3>
      <img src={movie.ImagePath} alt={movie.Title} className="movie-image" />
      <p>Director: {movie.Director.Name}</p>
    </div>
  );
};
