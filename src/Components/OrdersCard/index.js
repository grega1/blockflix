import React, { useContext, useState } from "react";
import downArrow from "../../assets/downArrow.svg";
import {
  ContainerCard,
  ContentCard,
  ShowDetails,
  ListOrdersItem,
} from "./style";
import { MoviesContext } from "../../context/moviesContext";


export function OrdersCard({ name, price }) {
  const { orders } = useContext(MoviesContext);
  const [movies, setMovies] = useState(orders[0].movies);
  console.log(orders)
  console.log(movies)
  
  // const price = movies.vote_average*10
  // const reducer = movies.reduce((previousValue, currentValue) => {
  //   return previousValue + currentValue.vote_average * 10;
  // }, 0);

  return (
    <ContainerCard>
      <ContentCard>
        <span>01/01/26 - {orders.length}</span>
        <span>
          R$ {orders.total}{" "}
          <button type="button">
            <img src={downArrow} alt="seta para baixo"></img>
          </button>
        </span>
      </ContentCard>
      <ShowDetails>
        <ListOrdersItem>
          {movies.map((movie) => {
            return (
              <li>
                <span>{movie.original_title}</span>
                <span>R$ {movie.vote_average * 10}</span>
              </li>
            );
          })}
        </ListOrdersItem>
      </ShowDetails>
    </ContainerCard>
  );
}
