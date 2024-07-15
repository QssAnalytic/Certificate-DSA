
import React from 'react';
import Dropdown from './Dropdown';
import Hero from '../hero/Hero'
import { useMainContext } from '../../../../context/context';

const Select = () => {


  const { options, selectedValue, handleOptionChange } = useMainContext()


  return (
    <div className='p-5 pb-0 print:px-12'>
      <div className=' '>
        <Hero />
      </div>
      <div className='flex justify-end font-montserrat font-bold'>

        <Dropdown options={options} onChange={handleOptionChange} />
      </div>
    </div>
  );
};


export default Select;
