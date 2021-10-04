import React from "react";
import RemoveImg from "../../assets/remove.svg"
import { ContainerCard, ContentCard, CardMovieImg, CardText, RemoveMovie } from "./style"

export function HorizontalCard({name,price,id}) {
  return (
    <ContainerCard>
      <ContentCard>
        <CardMovieImg src="" alt="" />
        <CardText>{name}</CardText>
        <CardText>R$ {price}</CardText>
      </ContentCard>
      <RemoveMovie onClick={(id)=>{splice}}><img src={RemoveImg} alt="X" /></RemoveMovie>
    </ContainerCard>
  )
}