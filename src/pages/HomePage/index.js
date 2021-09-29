import React from 'react';
import { useState, useEffect } from 'react'
import { FilmesContext } from '../../context/filmesContext';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { Footer } from '../../components/Footer'
import { MoviesService } from '../../services/service';
import { Card } from '../../components/Card'
import { TopRateds, MovieLine } from './style'

export function HomePage() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  useEffect(() => {
    MoviesService.getFilteredMovies(currentCategory).then((results) => {
      setFilmesFiltrados(results.slice(0,9));
    })
  },[currentCategory])
  useEffect(() => {
    MoviesService.getMovies().then((results) => {
      setFilmes(results.slice(0, 3));
      setLoading(false);
    })
  }, [filmes])

  return loading ? 'Carregando...' : (
    <FilmesContext.Consumer>
      {(adicionarFilmeNoCarrinho) => (
        <>
          <Navbar />
          <Line />
          <TopRateds>
            {
              filmes.map((filme) => (<Card filme={filme} adicionarFilmeNoCarrinho={adicionarFilmeNoCarrinho} />))
            }
            <MovieLine />
          </TopRateds>
          {
           filmesFiltrados.map((filme) => (<Card filme={filme} adicionarFilmeNoCarrinho={adicionarFilmeNoCarrinho} />))
          }
          <select onChange={(e) => {
            setCurrentCategory(e.target.value)
            console.log(e)
          }} name="movie" >
            <option value="28">Ação</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <Line />
          <Footer />
        </>
      )

      }
    </FilmesContext.Consumer>
  )
}
