'use client'
import { use, useState } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    detailedInfo: string;
    services: Array<string>;
    titleTools: string,
    tools: Array<{ logo: string, name: string }>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, detailedInfo, services, titleTools, tools }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredTool, setHoveredTool] = useState<string | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
        <div className="serviceCard p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center m-6">
            <div className="flex-grow">
                <h3 className="text-xl font-bold">{title}</h3>
                <hr className="underline"></hr>
                <p className=" text-white font-bold">{description}</p>
            </div>
            <button onClick={openModal}
                className="cardButton w-52 mt-6 p-6 bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg border-2 border-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-700">
                    Descubre mas
                </button>
        

         {/*Modal*/}
         {isModalOpen && (
            <div
                className="modal-container fixed inset-0 bg-black bg-opacity-50  items-center z-50 flex justify-center"
                onClick={closeModal} // Cierra el modal al hacer clic fuera del contenido
            >
                <div
                    className="modal bg-white rounded-lg p-8 shadow-lg max-w-3xl w-full"
                    onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido interno cierre el modal
                >
                    <h3 className="modal-title text-xl font-bold mb-2">{title}</h3>
                    <p className="modal-info">{detailedInfo}</p>
                    <h4 className="text-xl font-bold mb-2">Que ofrecemos</h4>
                    <ul className="services-list">    
                        {services.map((service, index) => (
                            <li className="list-element text-black" key={index}>{service}</li>
                        ))}
                    </ul>
                    <h4 className="text-xl font-bold mb-2">{titleTools}</h4>
                    <ul className="tools-list">
                        {tools.map((tool, index) => (
                            <li className="list-tool relative" key={index} onMouseEnter={() => setHoveredTool(tool.name)} onMouseLeave={() => setHoveredTool(null)}><img className="tool-image max-w-20 p-1" src={tool.logo} alt={tool.name}></img>
                            {hoveredTool === tool.name && (
                                <div className="tooltip">{tool.name}</div>
                            )}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={closeModal} // Solo cierra el modal al hacer clic en este botón
                        className="modal-button mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
)}
        </div>
    );
};

export default ServiceCard;