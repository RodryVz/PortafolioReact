import React from 'react';
import { skills } from '../data';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const Skills = () => {
    return (
        <>
        {skills.map(({title, percentage}, index) => {
            return(
                <div className='progress__box' key={index}>
                    <div className='progress__circle'>
                        <CircularProgressbar 
                        strokeWidth={3.5} 
                        text={`${percentage}%`} 
                        value={percentage} />
                    </div>

                    <h3 className='skills__title'>{title}</h3>
                </div>
            )
        })}
        </>
    )
}

export default Skills;