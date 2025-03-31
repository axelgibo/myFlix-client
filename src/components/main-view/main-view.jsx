import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {

    if (!token) return;

    fetch("https://myflix-application-318482b84ceb.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
>>>>>>> Stashed changes
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <Row>
      {!user ? (
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or
          <SignupView />
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
      ) : (
        <Col md={12}>
          <Row>
            {movies.map((movie) => (
              <Col className="mb-5" md={3} key={movie._id}>
                <MovieCard
                  movie={movie}
                  onMovieClick={(movie) => setSelectedMovie(movie)}
                />
              </Col>
            ))}
          </Row>
          <button
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          >
            Logout
          </button>
        </Col>
      )}
    </Row>
  );
};
