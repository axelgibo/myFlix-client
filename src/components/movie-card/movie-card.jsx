import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={movie.ImagePath} className="img-fluid" />
      <Card.Body>
        <Card.Title className="text-center">{movie.Title}</Card.Title>
        <Button onClick={() => onMovieClick(movie)} variant="primary">
          View Movie
        </Button>
      </Card.Body>
    </Card>
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