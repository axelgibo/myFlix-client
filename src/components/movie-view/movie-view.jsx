import React from 'react';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <button onClick={onBackClick} className="back-button">
        Back
      </button>

      <h2>{movie.Title}</h2>
      <img src={movie.ImagePath} alt={movie.Title} className="movie-image" />
      <p><strong>Description:</strong> {movie.Description}</p>
      <p><strong>Genre:</strong> {movie.Genre.Name}</p>
      <p><strong>Director:</strong> {movie.Director.Name}</p>
      {/* Add more movie details here */}
    </div>
  );
};