import React from 'react';
import parse from 'html-react-parser';

interface ResumeItemProps {
    icon: React.ReactNode;
    year: string;
    title: string;
    desc: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ icon, year, title, desc }) => {
    return (
        <div className='resume__item'>
            <div className='resume__icon'>{icon}</div>

            <span className='resume__date'>{year}</span>
            <h3 className='resume__subtitle'>{parse(title)}</h3>
            <p className='resume__description'>{desc}</p>
        </div>
    );
};

export default ResumeItem;
