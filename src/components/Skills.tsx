import { skills } from '../data';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const Skills = () => {
    return (
        <>
        {skills.map(({ title, percentage }, index) => {
            // Convierte el porcentaje a número si es una cadena
            const valorNumerico = parseInt(percentage);

            return (
                <div className='progress__box' key={index}>
                    <div className='progress__circle'>
                        <CircularProgressbar 
                            strokeWidth={3.5} 
                            text={`${valorNumerico}%`} 
                            value={valorNumerico} />
                    </div>

                    <h3 className='skills__title'>{title}</h3>
                </div>
            );
        })}
        </>
    );
}

export default Skills;
