import telegram from '../../assets/telegram.png'
import email from '../../assets/mail.svg'
import whatsapp from '../../assets/whatsapp.png'
import './ContactInfo.css';

function ContactInfo() {
    return (
        <>
            <div className='containerContact'>

                <div className='line' ></div>
                <div className='contactCall'>
                    <h1>Entre em Contato</h1>
                    <p>//Texto explicando que tipo de trabalho você tá procurando//
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio accusamus est consequatur quas repudiandae minus beatae,
                        a, similique, doloribus incidunt soluta! Quas, neque debitis dignissimos eaque maiores suscipit voluptatem.</p>
                </div>
                <div className="contactInfo">
                    <ul>
                        <li><img src={email} alt="email Icon"></img></li>
                        <li><img src={whatsapp} alt="whatsapp Icon"></img></li>
                        <li><img src={telegram} alt="telegramIcon"></img></li>
                    </ul>
                </div>
                <div className='line' ></div>
            </div>
        </>
    );
}

export default ContactInfo;
