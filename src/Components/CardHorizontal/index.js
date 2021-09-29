import React from "react";
import RemoveImg from "../../assets/remove.svg"
import { ContainerCard, ContentCard, CardMovieImg, CardText, RemoveMovie } from "./style"

export function HorizontalCard() {
  return (
    <ContainerCard>
      <ContentCard>
        <CardMovieImg src="" alt="" />
        <CardText>Esquadrão Suicida</CardText>
        <CardText>R$ 86,40</CardText>
      </ContentCard>
      <RemoveMovie><img src={RemoveImg} alt="X" /></RemoveMovie>
    </ContainerCard>
  )
}