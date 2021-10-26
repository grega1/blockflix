import React, { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { Line } from "../../components/Lines";
import { OrdersCard } from "../../components/OrdersCard";
import { Title } from "../Checkout/style";
import { Container } from "./style";
import { MoviesContext } from "../../context/moviesContext";
export function LastOrders() {
  const { orders } = useContext(MoviesContext);
  return (
    <>
      <Navbar />
      <Line />
      <Container>
        <Title>últimos pedidos</Title>
        {console.log(orders)}
        {orders.map(({ movies }) =>{
          console.log(movies)
          
         return movies.map((movie) =>{ 
           console.log(movie)
           return <OrdersCard
              name={movie.original_title}
              total={movie.vote_average * 10}
              key={movie.id}
              id={movie.id}
            />
          })}
        )}
      </Container>
    </>
  );
}
