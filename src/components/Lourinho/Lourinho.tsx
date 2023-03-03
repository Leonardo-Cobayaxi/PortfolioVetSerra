import './Lourinho.css';
import lLLd from "../../assets/lLLd.png"
import lPA from "../../assets/lPA.png"
import lourinho from "../../assets/lourinho.jpeg"
import { useState } from 'react';
function Lourinho() {
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
            <div className="lourinho">
                <div className={open ? 'modal' : 'none'}>
                    <h1 onClick={() => handleModalClose()}>X</h1>
                    <img className='modalImg' src={`${modalPhoto}`} ></img>
                </div>
                <div className='case'>
                    <img src={lourinho} alt="Foto lourinho"></img>
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
                    <img onClick={() => handleModal(lPA)} src={lPA} alt="lPA" ></img>
                    <img onClick={() => handleModal(lLLd)} src={lLLd} alt="lLLd"></img>
                </div>
            </div>
        </>
    );
}

export default Lourinho;
