'use client'
import { useTranslations } from "next-intl";
import { useState } from "react";

const ProjectSlider = () => {

  const t = useTranslations('Projects');

  const projects = [
    {
      title: 'Funky Art',
      description: t('project1Description'),
      image: 'funkyart/funkyart.gif'
    },
    {
        title: 'Nacho Trelles',
        description: t('project2Description'),
        image: 'nachotrelles/nachotrelles.png'
      },
      {
        title: 'Morsan',
        description: t('project3Description'),
        image: 'morsan/morsan.png'
      },
      {
        title: 'SOAPMeterFlow',
        description: t('project4Description'),
        image: 'trello.png'
      }
  ];

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
            <p className="text-black text-sm italic max-w-xl mx-auto">{currentProject.description} <a href="">{t('more')}</a></p>
            <div className="navigation-buttons flex justify-between w-full max-w">
                <button onClick={prevProject} className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all">Anterior</button>
                <button onClick={nextProject} className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all">Siguiente</button>
            </div>
        </div>
    )
}

export default ProjectSlider;