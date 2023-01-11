import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { HorizontalCard } from '../../components/CardHorizontal'
import { Container, ContentCheckoutList, Title, TotalList, ListItens, Confirm, TotalContent } from './style'
import { MoviesContext } from '../../context/moviesContext';
export function Checkout() {
  const { movies, orders, setOrders, setMovies, confirmOrder } = useContext(MoviesContext);

  const history = useHistory();

  const totalCost = movies.reduce((previousValue, currentValue) => { return previousValue + currentValue.vote_average * 10 }, 0)


  return (
    <>
      <Navbar />
      <Line />
      <Container>
        <ContentCheckoutList>
          <Title>CHECKOUT</Title>
          {movies.map((movie) => (<HorizontalCard name={movie.original_title} price={movie.vote_average * 10} key={movie.id} id={movie.id} />))
          }
        </ContentCheckoutList>
        <TotalContent>
          <TotalList>
          <Title>TOTAL</Title>
          {movies.map((movie) => (<ListItens>
            <li>
              <span>{movie.original_title}</span>
              <span>R${movie.vote_average * 10}</span></li>
          </ListItens>))}

          <div className="totalCost"> TOTAL: R${totalCost}</div>
          </TotalList>
          <Confirm onClick={() => {
            confirmOrder({
              data: new Date(),
              total: totalCost,
              movies
            });
            history.push('/filmes')
            setMovies([])

          }}>Confirmar</Confirm>

        </TotalContent>
      </Container>
    </>
  )
}