import logo from '../../assets/Logo.svg'
import ShopCart from '../../assets/Carrinho.svg'
import Profile from '../../assets/Perfil.svg'
import { Link } from 'react-router-dom';
import { Container, Content } from './style.js'
import { MoviesContext } from '../../context/moviesContext';
import { useContext } from 'react';

export function Navbar() {
  const {movies} = useContext(MoviesContext);
  return (
    <Container>
      <Content>
        <Link to={`/filmes`}> <img src={logo} alt="logo" /></Link>
        <div>
          <Link to={`/checkout`}><img src={ShopCart} alt="logo" /><span>{movies.length}</span></Link>
          <Link to={`/orders`}><img src={Profile} alt="profile" /></Link>
        </div>
      </Content>
    </Container>
  )
}