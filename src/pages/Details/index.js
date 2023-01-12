import React, { useContext } from "react";

import { Navbar } from "../../components/Navbar";
import { Line } from "../../components/Lines";
import { AddCart } from "../../components/Card/style";
import {
  ContainerMovie,
  DivFlex,
  Banner,
  MovieTitle,
  MovieInfo,
   InfoText,
  CardImg,
  MovieDetails,
} from "./style";
import { useParams } from "react-router";
import { MoviesContext } from "../../context/moviesContext";

export function Details() {
  const { allMovies } = useContext(MoviesContext);
  const { id } = useParams();
  const movie = allMovies.find((filme) => filme.id == id);

  return (
    <>
      <Navbar />
      <Line />
      {movie ? (
        <ContainerMovie>
          <MovieDetails>
            <Banner
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />

            <DivFlex
              isColumn
              style={{
                gap: "2rem",
                justifyContent: "center",
                alignItems: "space-around",
                width: "35%",               
              }}
            >
              <DivFlex>
                <MovieTitle>{movie.original_title}</MovieTitle>
              </DivFlex>
              <DivFlex
                isColumn
                style={{
                  gap: "2rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                <div style={{ display: "flex", gap: "1rem" }}>
                  <MovieInfo>01 de agosto de 2021</MovieInfo>
                  <MovieInfo>1h27min</MovieInfo>
                </div>
              </DivFlex>
              <DivFlex>
                < InfoText>{movie.overview}</ InfoText>
                
              </DivFlex>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center"}}> 
              <InfoText>Alugar este filme:</ InfoText>
              <AddCart>R${movie.vote_average * 10}</AddCart>
              </div>
            </DivFlex>
          </MovieDetails>
          <DivFlex isColumn>
            <MovieTitle>ATORES</MovieTitle>
            <DivFlex isColumn={false}>
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
            </DivFlex>
          </DivFlex>
          <DivFlex isColumn>
            <MovieTitle>FILMES RECOMENDADOS</MovieTitle>
            <DivFlex isColumn={false}>
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
              <CardImg src="https://placekitten.com/200/270" />
            </DivFlex>
          </DivFlex>
        </ContainerMovie>
      ) : (
        <div>
          <p>Filme não encontrado</p>
        </div>
      )}
    </>
  );
}
