import React, { useContext, useEffect } from "react";
import RemoveImg from "../../assets/remove.svg"
import { ContainerCard, ContentCard, CardMovieImg, CardText, RemoveMovie } from "./style"
import { MoviesContext } from "../../context/moviesContext";


export function HorizontalCard({ name, price, id }) {
  const { movies, setMovies } = useContext(MoviesContext);
  return (
    <ContainerCard>
      <ContentCard>
        <CardMovieImg src="" alt="" />
        <CardText>{name}</CardText>
        <CardText>R$ {price}</CardText>
      </ContentCard>
      <RemoveMovie onClick={
        () => {
          const filteredMovies = movies.filter(movie => movie.id !== id);
          setMovies(filteredMovies);
          
        }
      }><img src={RemoveImg} alt="X" /></RemoveMovie>
      
    </ContainerCard>
    
  )
  
}