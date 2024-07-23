import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

import "./contact.css";
import "../../App.css";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current !== null) {
            emailjs
                .sendForm(
                    'service_yy64tyg',
                    'template_8miui3c',
                    form.current,
                    'dGjvnKWRyzStBcN4g'
                )
                .then((result) => {
                    console.log(result.text);
                    setMessageSent(true);
                }, (error) => {
                    console.log(error.text);
                });
        };
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='form__input-group'>
                <div className='form__input-div'>
                    <input
                        type="text"
                        placeholder='Your name'
                        className='form__control'
                        name="user_name"
                    />
                </div>

                <div className='form__input-div'>
                    <input
                        type="email"
                        placeholder='Your email'
                        className='form__control'
                        name="user_email"
                    />
                </div>
            </div>

            <div className='form__input-div'>
                <textarea
                    placeholder='Your message'
                    className='form__control textarea'
                    name="message"
                ></textarea>
            </div>

            <button className='button1'>
                Send message
                
            </button>

            {messageSent && <p className="message-sent" >¡Mensaje enviado!</p>}
        </form>
    );
};

const Contact = () => {
    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Get in <span>touch</span>
            </h2>

            <div className='contact__container conteiner grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>Don`t hesitate to contact me</h3>

                    <p className='contact__description'>
                        "Write to me or call me, 
                        I will gladly answer each of your doubts and questions.
                        I am at your disposal."
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />
                            <div>
                                <span className='info__title'>Send me an email</span>
                                <h4 className='info__desc'>rodry_valenzuela@hotmail.com</h4>
                            </div>
                        </div>
                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Call me</span>
                                <h4 className='info__desc'>+54 3624-968347</h4>
                            </div>
                        </div>
                    </div>
                    <div className='contact__socials'>
                        <a href="http://linkedin.com/in/rodrigo-valenzuela-742124231" className='contact__social-link' target='_blank'>
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/RodryVz" className='contact__social-link' target='_blank'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <ContactUs />
            </div>
        </section>
    )
}

export default Contact