import IgLogo from '../../assets/instagram.svg'
import LiLogo from '../../assets/linkedin.png'
import FbLogo from '../../assets/facebook.png'
import LarLogo from "../../assets/larlogo.png"
import './Footer.css';

function Footer() {
    return (
        <div className="App">
            <footer>
                <img src={LiLogo} alt="linkedin Icon"></img>
                <img src={IgLogo} alt="instagram Icon"></img>
                <img src={FbLogo} alt="facebook Icon"></img>
                <img src={LarLogo} alt="Lar Icon"></img>

            </footer>
        </div>
    );
}

export default Footer;
