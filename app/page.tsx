import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import ServiceCard from "./components/serviceCard";
import ProjectSlider from "./components/projectSlider";

const services = [
  {
    title: "Software personalizado",
    description: "Creamos software dise;ado especificamente para satisfacer las necesidades de tu negocio. Trabajamos contigo para transformar tus ideas en herramientas tecnologicas que impulsen tu productividad y crecimiento",
    detailedInfo: "Especializados en crear la arquitectura y logica que impulsa tu aplicacion desde el nucleo. Este servicio abarca el dise;o, desarrollo y mantenimiento del sistema que opera detras de escena, asegurando un rendimiento optimo, seguridad y confiablidad.",
    services: ['Automatizacion de procesos y tareas para optimizar recursos y tiempo', 'Integracion eficiente de bases de datos, garantizando acceso rapido y seguro a la informacion', 'Creacion de APIs solidas para la interaccion entre el cliente y el servidor', 'Implementacion de sistemas escalables que puedan crecer junto a tu negocio'],
    titleTools: 'Lenguajes de programacion',
    tools: [{logo: 'java.png', name: 'Java'}, {logo: 'javascript.png', name:'Javascript'}, {logo: 'typescript.png', name: 'Typescript'}, {logo:'python.png', name:'Python'}, {logo:'html.png', name:'HTML'}, {logo:'sql.png', name:'SQL'}],
  },
  {
    title: "Desarrollo web",
    description: "Transformamos tu presencia online con un dise;o web personalizado y profesional. Estamos especializados en crear sitios web modernos, funcionales y faciles de usar, que se adaptan a tus necesidades especificas",
    detailedInfo: "El desarrollo web se centra en la creacion de interfaces de usuario interactivas y atractivas, donde la experiencia del usuario es clave. Transformamos dise;os en experiencias digitales funcionales utilizando tecnologias como HTML, CSS, Javascript y frameworks modernos como React o Angular.",
    services: ['Creacion de sitios web rapidos y eficientes mediante la optimizacion del rendimiento', 'Implementacion de animaciones, transiciones y efectos visuales que mejoran la experiencia de usuario', 'Dise;o de interfaces adaptables a diferentes dispositivos y tama;os de pantalla'],
    titleTools: 'Frameworks de desarrollo',
    tools: [{logo:'react.png', name:'Reactjs'}, {logo:'spring.png', name: 'Spring'}, {logo:'nextjs.png', name:'Nextjs'}, {logo:'angular.png', name:'Angular'}, {logo:'django.png', name:'Django'}],
  },
  {
    title: "Gestion de proyectos",
    description: "Maximizamos la eficiencia de tus proyectos con una gestion agil, flexible y centrado en resultados. Nos enfocamos en aplicar metodologias agiles para desarrollar soluciones software eficientes y de alta calidad, garantizando una entrega continua de valor.",
    detailedInfo: "La gestion de proyectos es clave para garantizar el exito de cualquier desarrollo tecnologico. Combinamos practicas agiles y tradicionales para garantizar una planificacion eficiente, una ejecucion fluida y una entrega exitosa. Aseguramos que cada etapa del proyecto este cuidadosamente gestionada y alineada con las expectativas del cliente y las necesidades del mercado.",
    services: ['Definicion clara de objetivos, hitos y cronogramas para asegurar una ejecucion efectiva', 'Implementacion de metodologias agiles como Scrum para una gestion flexible y centrada en el cliente', 'Supervision de entregables para garantizar que cumplan con altos estandares de calidad y funcionalidad'],
    titleTools: 'Herramientas de gestion',
    tools: [{logo:'trello.png', name:'Trello'}, {logo:'github.png', name: 'Github'}, {logo:'microsoftproject.png', name:'Microsoft Projects'}, {logo:'teams.png', name:'Microsoft Teams'}, {logo:'lunacy.png', name:'Lunacy'}],
  },
];



export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* Div del video */}
        <div className="video-background relative w-full h-96">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content z-10 text-white text-center">
            <h1 className="text-5xl font-bold">Softforge Solutions</h1>
            <h3 className="text-3xl mt-2">
              <em>Design, Development and Maintenance of customized software solutions.</em>
            </h3>
          </div>
        </div>

        {/* Div de About */}
        <div className="about container bg-gray-100 py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-5">Soluciones software a medida</h2>
          <h4 className="text-2xl text-center mb-8 ">Impulsamos tu negocio con tecnologias de vanguardia</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                detailedInfo={service.detailedInfo}
                services={service.services}
                titleTools={service.titleTools}
                tools={service.tools}
                />
            ))}
          </div>
        </div>

        {/*Div de works*/}
        <div className="projects flex flex-col justify-center items-center w-full">
          <div className="container py-16 px-8 flex justify-center flex-col">
            <h2 className="text-3xl font-bold text-center mb-5">Proyectos</h2>
            <div className="slider-container flex justify-center w-full">
              <ProjectSlider/>
            </div>
          </div>
        </div>

        {/*Div de contacto*/}
        <div className="contact-container flex w-full justify-center">
          
            <section className="contact-section flex flex-col items-center">
              <h2 className="text-white font-extrabold p-2">Contáctame</h2>
              <p className="text-white pb-2">¿Quieres colaborar o tienes alguna pregunta? No dudes en ponerte en contacto conmigo.</p>
              <div className="email-container p-1">
                <p>📧 <a href="mailto:luibelzan@outlook.com">luibelzan@outlook.com</a></p>
              </div>
              <div className="social-links flex flex-row pb-5">
                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn">
                  <img src="linkedin.png" alt="LinkedIn Logo" className="max-w-14"/>
                </a>
                <a href="https://github.com/tuusuario" target="_blank" aria-label="GitHub">
                  <img src="github.png" alt="GitHub Logo" className="max-w-14"/>
                </a>
              </div>
            </section>
          </div>




      </div>
  );
}
