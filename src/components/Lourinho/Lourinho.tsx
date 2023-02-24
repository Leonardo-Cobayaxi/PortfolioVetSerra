import './Lourinho.css';
import lLLd from "../../assets/lLLd.png"
import lPA from "../../assets/lPA.png"
import lourinho from "../../assets/lourinho.jpeg"
function Lourinho() {
    return (
        <>
            <div className="lourinho">
                <div className='case'>
                    <img src={lourinho}></img>
                    <p> //Faz aquele texto malandro explicando o caso e a importância do seu trabalho//
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla a eum quibusdam voluptatum tenetur dicta velit ipsam esse eaque error ullam hic praesentium totam rem, cupiditate,
                        animi minus. Dolorem, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos numquam voluptatem repudiandae
                        adipisci nostrum est dolor porro vitae eum corporis culpa qui at aut similique, commodi incidunt ab! Sapiente.
                    </p>

                </div>
                <div className='photosLourinho'>
                    <p>//texto falando do raiox// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus rerum doloribus mollitia?
                        Dolores dignissimos debitis nulla. Blanditiis, minus! Vel facilis quaerat quia aspernatur, obcaecati amet illo. Error, praesentium ratione?</p>
                    <img src={lPA}></img>
                    <img src={lLLd}></img>
                </div>
            </div>
        </>
    );
}

export default Lourinho;
