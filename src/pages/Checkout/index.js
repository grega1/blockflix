import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { HorizontalCard } from '../../components/CardHorizontal'
import { Container, ContentCheckoutList, Title, TotalList, ListItens, Confirm } from './style'

export function Checkout() {
  return (
    <>
      <Navbar />
      <Line />
      <Container>
        <ContentCheckoutList>
          <Title>CHECKOUT</Title>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </ContentCheckoutList>
        <TotalList>
          <Title>TOTAL</Title>
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