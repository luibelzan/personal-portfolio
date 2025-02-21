'use client';

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './languageSwitcher';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or name */}
                <Link href="/">
                    <img className='w-48' src='/logo.png'/>
                </Link>
        
                {/* Menu button for mobile */}
                <div className="max-md:block md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? 'Cerrar' : 'Menú'}
                    </button>
                </div>
        
                {/* Menú principal - Móvil y Desktop */}
                <ul className={`md:flex md:flex-row items-center 
                    ${isOpen ? 'flex' : 'hidden'} 
                    flex-col absolute md:static 
                    top-16 left-1/2 transform max-md:-translate-x-1/2 
                    bg-gray-800 w-3/4 md:w-auto 
                    rounded-lg p-4 md:p-0 z-50 text-center`}>
                    <li className="max-md:py-2 max-md:w-full">
                        <Link href="/" className='max-md:m-0'>Inicio</Link>
                    </li>
                    <li className="max-md:py-2 max-md:w-full">
                        <Link href="#about" className='max-md:m-0'>Sobre mí</Link>
                    </li>
                    <li className="max-md:py-2 max-md:w-full">
                        <Link href="#projects" className='max-md:m-0'>Proyectos</Link>
                    </li>
                    <li className="max-md:py-2 max-md:w-full">
                        <Link href="#contact" className='max-md:m-0'>Contacto</Link>
                    </li>
                    <li className="max-md:py-2 max-md:w-full flex justify-center">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
    };

export default NavBar;