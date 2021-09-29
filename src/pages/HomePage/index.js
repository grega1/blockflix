import React from 'react';
import {useState, useEffect} from 'react'
import { FilmesContext } from '../../context/filmesContext';
import { Header } from '../../components/Header'
import { Line } from '../../components/Lines'
import {Footer} from '../../components/Footer'
import { GlobalStyle } from '../../global';
import {MoviesService} from '../../services/service';
import {Card} from '../../components/Card'

export function HomePage(){
  const [filmes,setFilmes] = useState([])
  const [loading,setLoading] = useState(true);
  
  useEffect(() =>{
    MoviesService.getMovies().then((results)=>{
      setFilmes(results);
      setLoading(false);
    })
  },[filmes])
  return loading ? 'Carregando...' : (
    <FilmesContext.Consumer>
    {( adicionarFilmeNoCarrinho)=>(
      <><GlobalStyle />
      <Header />
      <Line />
      {filmes.map((filme)=>(<Card filme={filme} adicionarFilmeNoCarrinho={adicionarFilmeNoCarrinho}/>))}      
      <Line />
      <Footer />
      </>
    )

    }
    </FilmesContext.Consumer>
  )
}
