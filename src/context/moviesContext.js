import React, { createContext, useState } from 'react';


export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
  const [allMovies, setAllMovies]= useState([])
  const [movies, setMovies] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const addMovieToCart = (movie) => {
    movies.forEach((e)=>{
      if(e.id === movie.id){
        e.length ++;
        return
      }
    })
    setMovies([...movies, movie])
  }
  const confirmOrder = (order) => {
    
    for(let element of orders){
      console.log(element)
    }
    setOrders([...orders, order])
  }
  

  return (
    <MoviesContext.Provider value={{ movies, setMovies, addMovieToCart, orders, setOrders, confirmOrder, allMovies, setAllMovies,isDisabled, setIsDisabled}}>
      {props.children}
    </MoviesContext.Provider>
  );
};


// export default function adicionarFilmeNoCarrinho(movie){
//   movies.push(movie)
//   console.group('adicionarFilmeNoCarrinho')

//   console.groupEnd('adicionarFilmeNoCarrinho')
// }

// export const MoviesContext = React.createContext({
//   movies, adicionarFilmeNoCarrinho
// });
