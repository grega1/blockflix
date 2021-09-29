import React from 'react';
import Details from '../../assets/Details.svg';
import ShopCartWhite from '../../assets/CarrinhoWhite.svg';
import { CardBackground, AddCart, DetailsBtn,MovieImg } from './style'

export function Card({filme, adicionarFilmeNoCarrinho}) {
 
  return (
    <CardBackground>
      <MovieImg src={filme.poster_path} alt="cats" />
      <h3>{filme.title}</h3>
      <div>
        <DetailsBtn>
          <img src={Details} alt="seta na diagonal" />
        </DetailsBtn>
        <AddCart onClick={() => adicionarFilmeNoCarrinho(filme)}>
          <img src={ShopCartWhite} alt="carrinho branco" />
          <p>R$ 86,40</p>
        </AddCart>

      </div>
    </CardBackground>
  )
}