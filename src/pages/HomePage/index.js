import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { MoviesContext} from '../../context/moviesContext';

import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { Footer } from '../../components/Footer'
import { MoviesService } from '../../services/service';
import { Card } from '../../components/Card'
import { MovieDiv, MovieLine, Container } from './style'

export function HomePage({ addMovieToCart }) {
  const { setAllMovies} = useContext(MoviesContext)
  const [moviesHighlight, setMoviesHighlight] = useState([])
  const [loading, setLoading] = useState(true);
  const [moviesFiltrados, setMoviesFiltrados] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [hasMovies, setHasMovies] = useState(false);
  const [hasMoviesFiltered, setHasMoviesFiltered] = useState(false);

  useEffect(() => {//moviesdestaque
    if (!hasMovies) {
      MoviesService.getMovies().then((results) => {
        setMoviesHighlight(results.slice(0, 3));
        setLoading(false);
        setHasMovies(true);
      })
    }
  }, [moviesHighlight])

  useEffect(() => {
    if (!hasMoviesFiltered) {
      MoviesService.getFilteredMovies(currentCategory).then((results) => {
        setMoviesFiltrados(results.slice(0, 15));
        setHasMoviesFiltered(true);
        setAllMovies(results);
      })
    }
  }, [currentCategory])

  return loading ? 'Carregando...' : (
    <MoviesContext.Consumer>
      {() => (
        <>
          <Navbar />
          <Line />
          <Container>
            <MovieDiv>
              {
                moviesHighlight.map((movie) => (<Card movie={movie} addMovieToCart />))
              }
              <MovieLine />
            </MovieDiv>
            <div>
              <select onChange={(e) => {
                setCurrentCategory(e.target.value)
              }} name="movie" >
                <option value="28">Ação</option>
                <option value="27">Terror</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <MovieDiv style={{ flexWrap: 'no-wrap', marginBottom:'2rem'}}>
              {
                moviesFiltrados.map((movie) => (<Card movie={movie} addMovieToCart />))
              }
            </MovieDiv>
          </Container>
          <Line />
          <Footer />

        </>
      )

      }
    </MoviesContext.Consumer>
  )
}
