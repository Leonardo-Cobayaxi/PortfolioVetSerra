import telegram from '../../assets/telegram.png'
import email from '../../assets/mail.svg'
import whatsapp from '../../assets/whatsapp.png'
import './ContactInfo.css';

function ContactInfo() {
    return (
        <>
            <div className='contactCall'>
                <h1>Entre em Contato</h1>
                <p>//Texto explicando que tipo de trabalho você tá procurando//
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio accusamus est consequatur quas repudiandae minus beatae,
                    a, similique, doloribus incidunt soluta! Quas, neque debitis dignissimos eaque maiores suscipit voluptatem.</p>
            </div>
            <div className="contactInfo">
                <ul>
                    <li><img src={email}></img></li>
                    <li><img src={whatsapp}></img></li>
                    <li><img src={telegram}></img></li>
                </ul>
            </div>
        </>
    );
}

export default ContactInfo;
