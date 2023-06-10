import React from 'react'
import  Profiler  from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";
import "../../App.css";

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profiler} alt=""  className='home__img'/>

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'> <span>Soy Rodrigo Valenzuela.</span> Web Designer</h1>

                    <p className='home__description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit,
                        odit suscipit similique pariatur, quisquam repellat officiis.
                    </p>

                    <Link to='/about' className='button'>
                        More About Me {''}
                        <span className='button__icon'>
                            <FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;