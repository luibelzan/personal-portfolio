import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import ServiceCard from "./components/serviceCard";

const services = [
  {
    title: "Software personalizado",
    description: "Creamos software dise;ado especificamente para satisfacer las necesidades de tu negocio. Trabajamos contigo para transformar tus ideas en herramientas tecnologicas que impulsen tu productividad y crecimiento",
  },
  {
    title: "Desarrollo web",
    description: "Transformamos tu presencia online con un dise;o web personalizado y profesional. Estamos especializados en crear sitios web modernos, funcionales y faciles de usar, que se adaptan a tus necesidades especificas",
  },
  {
    title: "Gestion de proyectos",
    description: "Maximizamos la eficiencia de tus proyectos con una gestion agil, flexible y centrado en resultados. Nos enfocamos en aplicar metodologias agiles para desarrollar soluciones software eficientes y de alta calidad, garantizando una entrega continua de valor.",
  },
  {
    title: "Consultorias",
    description: "Impulsamos tu negocio con una asesoria estrategica que se adapta a tus necesidades. Nuestro equipo de expertos trabaja contigo para identificar oportunidades de mejora y optimizar procesos, tanto en areas tecnologicas como operativas.",
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
        <div className="about bg-gray-100 w-full py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-5">Soluciones software a medida</h2>
          <h4 className="text-2xl text-center mb-8 ">Impulsamos tu negocio con tecnologias de vanguardia</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                title={service.title}
                description={service.description}
                />
            ))}
          </div>
        </div>

      </div>
  );
}
