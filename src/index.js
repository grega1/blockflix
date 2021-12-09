import React from 'react';
import ReactDOM from 'react-dom';
import { MoviesProvider } from './context/moviesContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { Inicial } from './pages/Inicial';
import { Checkout } from './pages/Checkout';
import { LastOrders } from './pages/LastOrders';
import { ForZeroFor } from './pages/ForZeroFor';
import { GlobalStyle } from './global';
import './index.css';
//Usar api pra pegar filme específico baseado no ID
ReactDOM.render(
  <MoviesProvider >
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/filme/:id" component={Details} />
        <Route path="/filmes" component={HomePage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={LastOrders} />
        <Route path="/" component={Inicial} exact />
        <Route component={ForZeroFor} />
      </Switch>
    </BrowserRouter>
  </MoviesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
