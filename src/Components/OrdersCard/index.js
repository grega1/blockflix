import React from "react";
import downArrow from '../../assets/downArrow.svg'
import { ContainerCard, ContentCard, ShowDetails, ListOrdersItem } from './style'
export function OrdersCard() {
  return (
    <ContainerCard>
      <ContentCard>
        <span>01/01/2021 - 6 itens</span>
        <span>Total: R$500,00 <button type="button"><img src={downArrow} alt="seta para baixo"></img></button></span>

      </ContentCard>
      <ShowDetails>
        <ListOrdersItem>
          <li>
            <span>Esqudradão Suicida</span>
            <span>R$86,40</span>
          </li>
        </ListOrdersItem>
      </ShowDetails>
    </ContainerCard>
  )
}