import './Presentation.css';
import Matias from "../../assets/matias.png"
function Presentation() {
    return (
        <div className='containerPresentation'>

            <div className='line' ></div>
            <div className="Presentation">
                <div className='about'>
                    <h1>Sobre mim</h1>
                    <p> //Aqui você fala da sua vivência clínica, estudos e um pouco da sua vida de indiano// Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Unde eum maxime temporibus animi rem quisquam aspernatur mollitia dolor dolore tenetur cumque,
                        culpa modi minima nisi repellendus cum laudantium nemo atque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Unde eum maxime temporibus animi rem quisquam aspernatur mollitia dolor dolore tenetur cumque,
                        culpa modi minima nisi repellendus cum laudantium nemo atque!</p>
                </div>
                <img className='pfp' src={Matias}></img>
            </div>
            <div className='line' ></div>

        </div>

    );
}

export default Presentation;
