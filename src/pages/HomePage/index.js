import React from 'react';
import { useState, useEffect } from 'react';
import { MoviesContext, movies } from '../../context/moviesContext';

import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { Footer } from '../../components/Footer'
import { MoviesService } from '../../services/service';
import { Card } from '../../components/Card'
import { MovieDiv, MovieLine, Container } from './style'

export function HomePage({ addMovieToCart }) {
  const [moviesHighlight, setMoviesHighlight] = useState([])
  const [loading, setLoading] = useState(true);
  const [moviesFiltrados, setMoviesFiltrados] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  useEffect(() => {
    MoviesService.getFilteredMovies(currentCategory).then((results) => {
      setMoviesFiltrados(results.slice(0, 9));
    })
  }, [currentCategory])
  useEffect(() => {
    MoviesService.getMovies().then((results) => {
      setMoviesHighlight(results.slice(0, 3));
      setLoading(false);
    })
  }, [moviesHighlight])

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
                console.log(e)
              }} name="movie" >
                <option value="28">Ação</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <MovieDiv style={{ flexWrap: 'no-wrap' }}>
              {
                moviesFiltrados.map((movie) => (<Card movie={movie} addMovieToCart/>))
              }
            </MovieDiv>
          </Container>
          {/* <Line />
          <Footer /> */}

        </>
      )

      }
    </MoviesContext.Consumer>
  )
}
