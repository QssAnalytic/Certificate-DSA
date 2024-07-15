import React, { useContext } from 'react';
import { useMainContext } from '../../../../context/context';

const imageMap = {
    'Data Analyst': '/hero/analyst.svg',
    'Participant': '/hero/background.svg',
    'Data Scientist': '/hero/scientist.svg',
    'Junior Data Scientist': '/hero/junior.svg',
};

const Hero = () => {
    const { selectedValue } = useMainContext();
    const imageUrl = imageMap[selectedValue];

    return (
        <div className='relative '>
            <img src={imageUrl} alt="" className='w-full' />
            <h1 className='absolute inset-0 pl-10 text-start flex items-center  text-[58px] -tracking-wide leading-tight text-white font-montserrat font-light'>Data Science Academy <br /> Certificate</h1>
        </div>
    );
};

export default Hero;
