import React,{useContext} from 'react';
import Details from '../../assets/Details.svg';
import { Link } from 'react-router-dom';
import ShopCartWhite from '../../assets/CarrinhoWhite.svg';
import { CardBackground, AddCart, DetailsBtn, MovieImg } from './style'
import  { MoviesContext } from '../../context/moviesContext'

export function Card({ movie }) {
  const {movies,addMovieToCart} = useContext(MoviesContext)

  return (
    <CardBackground>
      <MovieImg
      //  as={Link} to={`filme/${movie.url}`} 
       src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Capa do F" />
      <h3>{movie.title}</h3>
      <div className="buttons">
        <DetailsBtn
        //  as={Link} to={`filme/${movie.url}`}
         >
          <img src={Details} alt="seta na diagonal" />
        </DetailsBtn>
        <AddCart onClick={() => {
          addMovieToCart(movie)
          console.log(movies)
        }}>
          <img src={ShopCartWhite} alt="carrinho branco" />
          <p>R${movie.vote_average*10}</p>
        </AddCart>

      </div>
    </CardBackground>
  )
}