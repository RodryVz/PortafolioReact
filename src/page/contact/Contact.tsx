import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./contact.css";
import "../../App.css";

const Contact = () => {
    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Get In <span>Touch</span>
            </h2>

            <div className='contact__container conteiner grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>Don't be Shy</h3>

                    <p className='contact__description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Laborum molestias quasi necessitatibus sequi qui dolore culpa
                        fugiat officia unde repudiandae vero minima ex recusandae.
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />
                            <div>
                                <span className='info__title'>Mail me </span>
                                <h4 className='info__desc'>rodry_valenzuela@hotmail.com</h4>
                            </div>
                        </div>
                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Call me </span>
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

                        <a href="https://facebook.com" className='contact__social-link'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <form className='contact__form'>
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='form__control' />
                        </div>

                        <div className='form__input-div'>
                            <input type="email"
                                placeholder='Your Email'
                                className='form__control' />
                        </div>

                    </div>

                    <div className='form__input-div'>
                        <textarea
                            placeholder='Your Message'
                            className='form__control textarea'
                            ></textarea>
                    </div>

                    <button className='button'>
                        Send Message
                        <span className='button__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
