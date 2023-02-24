import IgLogo from '../../assets/instagram.svg'
import LiLogo from '../../assets/linkedin.svg'
import FbLogo from '../../assets/facebook.svg'
import LarLogo from "../../assets/contatolarlogo.png"
import './Footer.css';

function Footer() {
    return (
        <div className="App">
            <footer>
                <img src={LiLogo}></img>
                <img src={IgLogo}></img>
                <img src={FbLogo}></img>
                <img src={LarLogo}></img>
            </footer>
        </div>
    );
}

export default Footer;
