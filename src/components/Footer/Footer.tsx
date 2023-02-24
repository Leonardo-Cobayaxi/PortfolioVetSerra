import IgLogo from '../../assets/instagram.svg'
import LiLogo from '../../assets/linkedin.png'
import FbLogo from '../../assets/facebook.png'
import LarLogo from "../../assets/larlogo.png"
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
