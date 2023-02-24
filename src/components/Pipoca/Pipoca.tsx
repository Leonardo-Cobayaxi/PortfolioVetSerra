import './Pipoca.css';
import pAp from "../../assets/pAP.png"
import pAPVD from "../../assets/pAPVD.png"
import pLLD from "../../assets/pLLD.png"
import pPALLD from "../../assets/pPALLD.png"
import pipoca from "../../assets/pipoca.png"
function Pipoca() {
    return (
        <>
            <div className="pipoca">
                <div className='case'>
                    <p> ////  Faz aquele texto malandro explicando o caso e a importância do seu trabalho ////
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla a eum quibusdam voluptatum tenetur dicta velit ipsam esse eaque error ullam hic praesentium totam rem, cupiditate,
                        animi minus. Dolorem, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos numquam voluptatem repudiandae
                        adipisci nostrum est dolor porro vitae eum corporis culpa qui at aut similique, commodi incidunt ab! Sapiente.
                    </p>
                    <img src={pipoca}></img>

                </div>
                <div className='photosPipoca'>
                    <p>//texto falando do raiox// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus rerum doloribus mollitia? Dolores dignissimos debitis nulla. Blanditiis, minus! Vel facilis quaerat quia aspernatur, obcaecati amet illo. Error, praesentium ratione?</p>
                    <img src={pLLD}></img>
                    <img src={pPALLD}></img>
                </div>
                <div className='photosPipoca'>
                    <p>//texto falando do raiox// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni ullam delectus voluptatibus excepturi magnam asperiores eum ad aliquam eligendi accusamus, voluptate soluta veniam. Corporis vel harum placeat quam doloribus!</p>
                    <img src={pAp}></img>
                    <img src={pAPVD}></img>

                </div>
            </div>


        </>
    );
}

export default Pipoca;
