import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { OrdersCard } from '../../components/OrdersCard';
import { Title } from '../Checkout/style'
import { Container } from './style'
export function LastOrders() {
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