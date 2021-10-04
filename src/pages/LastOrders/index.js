import React, {useContext} from 'react';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { OrdersCard } from '../../components/OrdersCard';
import { Title } from '../Checkout/style'
import { Container } from './style'
import { MoviesContext } from '../../context/moviesContext';
export function LastOrders() {
  const data = useContext(MoviesContext);
  console.log(data);
  return (
    <>
      <Navbar />
      <Line />
      <Container>
        <Title>últimos pedidos</Title>
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />

      </Container>
    </>

  )
}