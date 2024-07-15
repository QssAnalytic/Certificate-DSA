import React, { useState } from 'react';

const DropdownMenu = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option); ~``
    };

    return (
        <div className="relative inline-block mt-px">
            <div className=' relative '>
                <div className='absolute h-[0.5px] w-16 left-[-23px] bg-[#e31f60]'></div>
                <div className='absolute h-[0.5px] top-[0.5px] w-16 left-[-22px] bg-[#e31f60]'></div>
                <div className='absolute h-[2px] top-[1px] w-16 left-[-21px] bg-[#e31f60]'></div>
                <div className='absolute h-[2px] top-[2px] w-16 left-[-15px] bg-[#e31f60]'></div>
                <div className='absolute h-[2px] top-[4px] w-16 left-[-12px] bg-[#e31f60]'></div>
                <div className='absolute h-[4px] top-[5px] w-16 left-[-10px] bg-[#e31f60]'></div>
                <div className="absolute top-[-14px] left-[-4px] " style={{
                    borderLeft: '22px solid #e31f60',
                    borderTop: '35px solid transparent',
                    borderBottom: '36px solid transparent',
                    width: '0',
                    height: '0',
                    transform: 'rotate(108deg)'
                }}>
                </div>

                <button type="button" onClick={toggleDropdown} className=" bg-[#e31f60] w-fit rounded-l-full px-12 h-10 text-white font-bold text-xl">
                    {selectedOption ? selectedOption.value : 'Select'}
                </button>
            </div>
            {
                isOpen && (
                    <div className="absolute right-0 text-sm focus:outline-none ">
                        <div className=" bg-[#e31f60] text-white  rounded-b-lg">
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className="block p-2 hover:bg-red-500  hover:scale-105 hover:text-white w-full text-white"
                                >
                                    {option.value}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            }
        </div >


    );
};

export default DropdownMenu;
