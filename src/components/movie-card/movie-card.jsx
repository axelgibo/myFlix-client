import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <h3>{movie.Title}</h3>
      <img src={movie.ImagePath} alt={movie.Title} className="movie-image" />
      <p>Director: {movie.Director.Name}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    // Add other movie properties here if needed
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
