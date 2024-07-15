import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [showInternOptions, setShowInternOptions] = useState(false);

    return (
        <nav className='container flex items-center justify-around mx-auto  pb-14 pt-5' >
            <div className="relative inline-block text-lg group cursor-pointer">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                    <span className="relative">
                        <NavLink to='/'>Course</NavLink>
                    </span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </div>
            <div className="relative inline-block text-lg group cursor-pointer">
                <span
                    className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white"
                    onMouseEnter={() => { setShowInternOptions(true) }}
                    onMouseLeave={() => { setShowInternOptions(false) }}
                >
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                    <span className="relative">
                        <p>
                            Intern
                        </p>
                    </span>
                </span>
                {showInternOptions && (
                    <div className="absolute bottom-0 right-0 w-full h-[1px]  -mr-1 bg-white  transition-all duration-200 ease-linear  rounded-lg group-hover:mb-0 group-hover:mr-0"
                        onMouseEnter={() => { setShowInternOptions(true) }}
                        onMouseLeave={() => { setShowInternOptions(false) }}
                    >
                        <NavLink className="block px-4" to='/intern/normal'>Normal</NavLink>
                        <NavLink className="block px-4" to='/intern/honors'>Honors</NavLink>
                    </div>
                )}
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </div>
        </nav>
    )
}

export default Navbar