import React,{ createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const addMovieToCart =(movie)=>{
      setMovies([...movies,movie])
  }

  return (
    <MoviesContext.Provider value={{ movies, setMovies,addMovieToCart }}>
      {props.children}
    </MoviesContext.Provider>
  );
};


// export default function adicionarFilmeNoCarrinho(movie){
//   movies.push(movie)
//   console.group('adicionarFilmeNoCarrinho')
//   console.log(movies);
//   console.groupEnd('adicionarFilmeNoCarrinho')
// }

// export const MoviesContext = React.createContext({
//   movies, adicionarFilmeNoCarrinho
// });
