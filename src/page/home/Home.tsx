
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Profiler from '../../assets/developer.png';
import './home.css';
import '../../App.css';

// Definir el componente Home
const Home = () => {
    return (
        <section className='home section grid'>
            {/* Mostrar la imagen de fondo */}
            <div className='home__img-container'>
                <img src={Profiler} alt="" className='home__img' />
                <div className='home__img-overlay'></div>
            </div>

            <div className='home__content'>
                <div className='home__data'>
                    {/* Mostrar el título */}
                    <h1 className='home__title'> <span>React Developer</span></h1>
                    <h2 className='home__h2'>Valenzuela Rodrigo</h2>

                    {/* Mostrar la descripción */}
                    <p className='home__description'>
                    "Explore my portfolio and discover how I turn code into captivating experiences.
                    If you're looking for someone who not only codes but also tells stories through technology,
                    here's your React Jr. developer. Ready to bring your projects to life? Let's talk and create magic in the React world!"
                    </p>

                    {/* Agregar un enlace con un botón */}
                    <Link to='/about' className='button'>
                        About me {''}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Agregar un bloque de color */}
            <div className='color__block'></div>
        </section>
    )
}

// Exportar el componente Home
export default Home;
