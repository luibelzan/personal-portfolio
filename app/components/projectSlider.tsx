'use client'
import { useState } from "react";

const projects = [
    {
      title: 'Funky Art',
      description: 'Plataforma Web3 para acu;ar activos digitales en la Blockchain de Ethereum',
      image: 'funkyart.png'
    },
    {
        title: 'Nacho Trelles',
        description: 'Pagina web personal de Nacho Trelles, un bombero apasionado por la literatura.',
        image: 'nachotrelles.png'
      },
      {
        title: 'Morsan',
        description: 'Tienda online de ropa personalizada.',
        image: 'morsan.png'
      },
      {
        title: 'Motor de lectura y recuperacion SOAP',
        description: 'Servicio para automatizar la lectura de los contadores inteligentes de la luz',
        image: 'trello.png'
      }
  ];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex+1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length -1 : prevIndex - 1); 
    };

    const currentProject = projects[currentIndex];

    return(
        <div className="project-card text-center p-4 border rounded-3xl shadow-lg  w-full flex flex-col justify-between">
            <div className="image-container">
            <img src={currentProject.image} alt={currentProject.title} className="project-image w-full object-cover  rounded-3xl"/>
            </div>
            
            <h3 className="text-3xl font-extrabold text-black">{currentProject.title}</h3>
            <p className="text-black text-sm italic max-w-xl mx-auto">{currentProject.description} <a href="">Ver mas</a></p>
            <div className="navigation-buttons flex justify-between w-full max-w">
                <button onClick={prevProject} className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all">Anterior</button>
                <button onClick={nextProject} className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all">Siguiente</button>
            </div>
        </div>
    )
}

export default ProjectSlider;