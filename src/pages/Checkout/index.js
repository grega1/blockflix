import React, { useContext } from 'react';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { HorizontalCard } from '../../components/CardHorizontal'
import { Container, ContentCheckoutList, Title, TotalList, ListItens, Confirm } from './style'
import { MoviesContext } from '../../context/moviesContext';

export function Checkout() {
  const {movies} = useContext(MoviesContext);
  
  return (
    <>
      <Navbar />
      <Line />
      <Container>
        <ContentCheckoutList>
          <Title>CHECKOUT</Title>
          {movies.map((movie)=>(<HorizontalCard name={movie.original_title} price={movie.vote_average*10} />))
          }
        </ContentCheckoutList>
        <TotalList>
          <Title>TOTAL</Title>
          <ListItens>
            <li>
              <span>Esqudradão Suicida</span>
              <span>R$86,40</span></li>
          </ListItens>

          <ListItens>
            <span>Esqudradão Suicida</span>
            <span>R$86,40</span>
          </ListItens>

          <ListItens>
            <span>Esqudradão Suicida</span>
            <span>R$86,40</span>
          </ListItens>

          <ListItens>
            <span>Esqudradão Suicida</span>
            <span>R$86,40</span>
          </ListItens>

          <Confirm>Confirmar  </Confirm>

        </TotalList>
      </Container>
    </>
  )
}