import React from 'react';
import Details from '../../assets/Details.svg';
import ShopCartWhite from '../../assets/CarrinhoWhite.svg';
import { CardBackground, AddCart, DetailsBtn,MovieImg } from './style'

export function Card() {
  return (
    <CardBackground>
      <MovieImg src="http://placekitten.com/300/350" alt="cats" />
      <h3>Esquadrão Suicida</h3>
      <div>
        <DetailsBtn>
          <img src={Details} alt="seta na diagonal" />
        </DetailsBtn>
        <AddCart>
          <img src={ShopCartWhite} alt="carrinho branco" />
          <p>R$ 86,40</p>
        </AddCart>

      </div>
    </CardBackground>
  )
}