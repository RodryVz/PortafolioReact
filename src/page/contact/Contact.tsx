import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
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
                        placeholder='Tu nombre'
                        className='form__control'
                        name="user_name"
                    />
                </div>

                <div className='form__input-div'>
                    <input
                        type="email"
                        placeholder='Tu correo electrónico'
                        className='form__control'
                        name="user_email"
                    />
                </div>
            </div>

            <div className='form__input-div'>
                <textarea
                    placeholder='Tu mensaje'
                    className='form__control textarea'
                    name="message"
                ></textarea>
            </div>

            <button className='button' type="submit">
                Enviar mensaje
                <span className='button__icon contact__button-icon'>
                    <FiSend />
                </span>
            </button>

            {messageSent && <p className="message-sent">¡Mensaje enviado!</p>}
        </form>
    );
};

const Contact = () => {
    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Ponte en <span>contacto</span>
            </h2>

            <div className='contact__container conteiner grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>No seas tímido</h3>

                    <p className='contact__description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Laborum molestias quasi necessitatibus sequi qui dolore culpa
                        fugiat officia unde repudiandae vero minima ex recusandae.
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />
                            <div>
                                <span className='info__title'>Envíame un correo </span>
                                <h4 className='info__desc'>rodry_valenzuela@hotmail.com</h4>
                            </div>
                        </div>
                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Llámame </span>
                                <h4 className='info__desc'>+54 3624-968347</h4>
                            </div>
                        </div>
                    </div>
                    <div className='contact__socials'>
                        <a href="https://linkedin.com" className='contact__social-link'>
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com" className='contact__social-link'>
                            <FaGithub />
                        </a>

                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <ContactUs />
            </div>
        </section>
    )
}

export default Contact;
