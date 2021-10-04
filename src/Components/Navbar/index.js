import logo from '../../assets/Logo.svg'
import ShopCart from '../../assets/Carrinho.svg'
import Profile from '../../assets/Perfil.svg'
import { Link } from 'react-router-dom';
import { Container, Content } from './style.js'
export function Navbar() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <div>
          <Link to={`checkout/`}><img src={ShopCart} alt="logo" /></Link>
          <Link as={Link} to={`profile/`}><img src={Profile} alt="profile" /></Link>
        </div>
      </Content>
    </Container>
  )
}