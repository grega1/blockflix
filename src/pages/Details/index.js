import React, { useContext } from 'react';

import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { AddCart } from '../../components/Card/style';
import { ContainerMovie, DivFlex, Banner, MovieTitle, MovieInfo, Sinopse, CardImg } from './style'
import { useParams } from 'react-router';
import { MoviesContext } from '../../context/moviesContext';

export function Details() {
  const { allMovies } = useContext(MoviesContext);
  const { id } = useParams();
  const movie = allMovies.find((filme)=> filme.id == id);

  
  
  return (
    <>
      <Navbar />
      <Line />
      {movie ? <ContainerMovie>
        <Banner src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></Banner>
        <DivFlex isColumn={false}>
          <MovieTitle>{movie.original_title}</MovieTitle>
          <AddCart>R${movie.vote_average * 10}</AddCart>
        </DivFlex>
        <DivFlex isColumn={false}>
          <MovieInfo>01 de agosto de 2021</MovieInfo>
          <MovieInfo>1h27min</MovieInfo>
        </DivFlex>
        <DivFlex>
          <Sinopse>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit nunc gravida faucibus eget non. Sed posuere vulputate praesent non lectus enim, vel penatibus auctor. Non nibh tempus adipiscing diam eros, scelerisque neque. Faucibus ultrices porta hendrerit sed convallis dictum sit amet.</Sinopse>
        </DivFlex>
        <DivFlex isColumn>
          <MovieTitle>ATORES</MovieTitle>
          <DivFlex isColumn={false}>
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
          </DivFlex>
        </DivFlex>
        <DivFlex isColumn>
          <MovieTitle>FILMES RECOMENDADOS</MovieTitle>
          <DivFlex isColumn={false}>
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
            <CardImg src="https://placekitten.com/200/270" />
          </DivFlex>
        </DivFlex>
      </ContainerMovie> : <div><p>Filme não encontrado</p></div>}

    </>


  )
}