import React, { useContext, useRef } from "react";
import Details from "../../assets/Details.svg";
import { Link } from "react-router-dom";
import ShopCartWhite from "../../assets/CarrinhoWhite.svg";
import { CardBackground, AddCart, DetailsBtn, MovieImg } from "./style";
import { MoviesContext } from "../../context/moviesContext";

export function Card({ movie }) {
  const { movies, addMovieToCart } = useContext(MoviesContext);
  const cardRef = useRef(null);

  return (
    <CardBackground>
      <MovieImg
        //  as={Link} to={`filme/${movie.url}`}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="Capa do F"
      />
      <h3>{movie.title}</h3>
      <div className="buttons">
        <DetailsBtn to={`filme/${movie.id}`}>
          <img src={Details} alt="seta na diagonal" />
        </DetailsBtn>
        <AddCart
          disabled={movies.includes(movie)}

          ref={cardRef}
          // onLoad={() => {
          //   if (movies.includes(movie)) {
          //     console.log(movies.includes(movie));
          //     cardRef.current.disabled = true;
          //     console.log(movie)
          //     console.log(movies)
          //   } else {
          //     console.log(movies.includes(movie));
          //     cardRef.current.disabled = false;
          //     console.log(movie)
          //     console.log(movies)
          //   }
          // }}
          onClick={() => {
            addMovieToCart(movie);
            cardRef.current.disabled = true;
          }}
        >
          <img src={ShopCartWhite} alt="carrinho branco" />
          <p>R${movie.vote_average * 10}</p>
        </AddCart>
      </div>
    </CardBackground>
  );
}
