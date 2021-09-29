import React from 'react';

export const filmes = [{nome:'',duração:''}];
export function adicionarFilmeNoCarrinho(filme){
  filmes.push(filme);
}

export const FilmesContext = React.createContext({
  filmes, adicionarFilmeNoCarrinho
});