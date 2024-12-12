'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or name */}
                <Link href="/">
                    SoftForge Solutions
                </Link>
        
                {/* Menu button for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? 'Cerrar' : 'Menú'}
                    </button>
                </div>
        
                {/* Main menu - Mobile and Desktop */}
                <ul className={`space-x-6 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre mí</Link>
                    </li>
                    <li>
                        <Link href="/projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
    };

export default NavBar;