interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return(
        <div className="serviceCard p-6 rounded-lg shadow-lg text-center flex flex-col justify-between m-6">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="mt-4 text-white font-bold">{description}</p>
            <a href="#" className="cardButton mt-6 p-6 inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg border-2 border-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-700">
                Descubre más
            </a>
        </div>
    );
};

export default ServiceCard;