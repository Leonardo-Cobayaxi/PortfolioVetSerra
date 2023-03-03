import { Link } from 'react-router-dom'
import styled from "styled-components";
import './Header.css';
import logo from '../../assets/larlogotransparente.png'
const linkStyle = {
  color: "#FFFF",
  textDecoration: "none",
};
function Header() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Lar logo"></img>
        <div className='nav'>
          <div className='home'>
            <Link style={linkStyle} to='/'>
              <p>Sobre</p>
            </Link>
          </div>
          <div>
            <Link style={linkStyle} to='/casos'>
              <p>Rotina Clínica</p>
            </Link>
          </div>
          <div className='contact'>
            <Link style={linkStyle} to='/contato'>
              <p>Contato</p>
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;
