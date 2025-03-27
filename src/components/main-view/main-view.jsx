import React, { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      _id: '1',
      Title: 'The Shawshank Redemption',
      Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODcxMWZhYWI1YjdmXkEyXkFqcGdeQXVyNzkwMjQ5Mzc@._V1_.jpg',
      Genre: { Name: 'Drama' },
      Director: { Name: 'Frank Darabont' },
    },
    {
      _id: '2',
      Title: 'The Godfather',
      Description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      ImagePath: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxMTc0Nl5BMl5BanBnXkFtZTcwMjQ4NzMxNA@@._V1_.jpg',
      Genre: { Name: 'Crime' },
      Director: { Name: 'Francis Ford Coppola' },
    },
    {
      _id: '3',
      Title: 'The Dark Knight',
      Description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      ImagePath: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODk5MTczMw@@._V1_.jpg',
      Genre: { Name: 'Action' },
      Director: { Name: 'Christopher Nolan' },
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(movie) => setSelectedMovie(movie)}
        />
      ))}
    </div>
  );
};