import './Pipoca.css';
import pAp from "../../assets/pAP.png"
import pAPVD from "../../assets/pAPVD.png"
import pLLD from "../../assets/pLLD.png"
import pPALLD from "../../assets/pPALLD.png"
import pipoca from "../../assets/pipoca.png"
import { useState } from 'react';
function Pipoca() {
    const [modalPhoto, setModalPhoto] = useState({})
    const [open, setOpen] = useState(false)

    function handleModal(photo: any) {
        setModalPhoto(photo)
        setOpen(true)
    }
    function handleModalClose() {
        setModalPhoto({})
        setOpen(false)
    }
    return (
        <>
            <div className="pipoca">
                <div className={open ? 'modal' : 'none'}>
                    <h1 onClick={() => handleModalClose()}>X</h1>
                    <img className='modalImg' src={`${modalPhoto}`} ></img>
                </div>
                <div className='case'>
                    <p> ////  Faz aquele texto malandro explicando o caso e a importância do seu trabalho ////
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla a eum quibusdam voluptatum tenetur dicta velit ipsam esse eaque error ullam hic praesentium totam rem, cupiditate,
                        animi minus. Dolorem, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos numquam voluptatem repudiandae
                        adipisci nostrum est dolor porro vitae eum corporis culpa qui at aut similique, commodi incidunt ab! Sapiente.
                    </p>
                    <img src={pipoca} alt="Foto pipoca"></img>

                </div>
                <div className='photosPipoca'>
                    <p>//texto falando do raiox// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus rerum doloribus mollitia? Dolores dignissimos debitis nulla. Blanditiis, minus! Vel facilis quaerat quia aspernatur, obcaecati amet illo. Error, praesentium ratione?</p>
                    <img onClick={() => handleModal(pLLD)} src={pLLD} alt="pLLD"></img>
                    <img onClick={() => handleModal(pPALLD)} src={pPALLD} alt="pPALLD"></img>
                </div>
                <div className='photosPipoca'>
                    <p>//texto falando do raiox// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni ullam delectus voluptatibus excepturi magnam asperiores eum ad aliquam eligendi accusamus, voluptate soluta veniam. Corporis vel harum placeat quam doloribus!</p>
                    <img onClick={() => handleModal(pAp)} src={pAp} alt="pAp"></img>
                    <img onClick={() => handleModal(pAPVD)} src={pAPVD} alt="pAPVD"></img>

                </div>
            </div>


        </>
    );
}

export default Pipoca;
