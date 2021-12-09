import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Container, Content } from './style.js'
export function Header() {
  return (
    <Container>
      <Content>
        <Link to={`/`}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to={`/login`}>
          Entrar</Link>
      </Content>
    </Container>
  )
}