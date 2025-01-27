"use client"
import styles from "./page.module.css";
import ServiceCard from "../components/serviceCard";
import ProjectSlider from "../components/projectSlider";
import ScaleFactorCalculator from "../components/scaleFactorCalculator";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';


export default function Home() {

  ScaleFactorCalculator();

  const t = useTranslations('HomePage');

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Description'),
      detailedInfo: t('service1DetailedInfo'),
      services: t('service1Services').split(';'),
      titleTools: t('service1TitleTools'),
      tools: [{logo: 'java.png', name: 'Java'}, {logo: 'javascript.png', name:'Javascript'}, {logo: 'typescript.png', name: 'Typescript'}, {logo:'python.png', name:'Python'}, {logo:'html.png', name:'HTML'}, {logo:'sql.png', name:'SQL'}],
    },
    {
      title: t('service2Title'),
      description: t('service2Description'),
      detailedInfo: t('service2DetailedInfo'),
      services: t('service2Services').split(';'),
      titleTools: t('service2TitleTools'),
      tools: [{logo:'react.png', name:'Reactjs'}, {logo:'spring.png', name: 'Spring'}, {logo:'nextjs.png', name:'Nextjs'}, {logo:'angular.png', name:'Angular'}, {logo:'django.png', name:'Django'}],
    },
    {
      title: t('service3Title'),
      description: t('service3Description'),
      detailedInfo: t('service3DetailedInfo'),
      services: t('service3Services').split(';'),
      titleTools: t('service3TitleTools'),
      tools: [{logo:'trello.png', name:'Trello'}, {logo:'github.png', name: 'Github'}, {logo:'microsoftproject.png', name:'Microsoft Projects'}, {logo:'teams.png', name:'Microsoft Teams'}, {logo:'lunacy.png', name:'Lunacy'}],
    },
  ];


  return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* Div del video */}
        <div className="video-background relative w-full h-96">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content z-10 text-white text-center">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">Softforge Solutions</h1>
            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-4xl mt-2">
              <em>Design, Development and Maintenance of customized software solutions.</em>
            </h3>
          </div>
        </div>

        {/* Div de About */}
        <div className="about container bg-gray-100 py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-5">Soluciones software a medida</h2>
          <h4 className="text-2xl text-center mb-8 ">Impulsamos tu negocio con tecnologias de vanguardia</h4>
          <div className="cards grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold text-center mb-5">{t('projects')}</h2>
            <div className="slider-container flex justify-center w-full">
              <ProjectSlider/>
            </div>
          </div>
        </div>

        {/*Div de contacto*/}
        <div className="contact-container flex w-full justify-center">
          
            <section className="contact-section flex flex-col items-center">
              <div className="container py-16 px-8 flex justify-center flex-col items-center">
              <h2 className="contact-title text-white font-extrabold p-2 text-3xl">{t('contactSectionTitle')}</h2>
              <p className="contact-info text-white pb-2 text-xl">{t('contactSectionDescription')}</p>
              <div className="email-container p-1">
                <p className="contact-email text-xl">📧 <a href="mailto:luibelzan@outlook.com">luibelzan@outlook.com</a></p>
              </div>
              <div className="social-links flex flex-row">
                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn">
                  <img src="linkedin.png" alt="LinkedIn Logo" className="contact-socials max-w-16"/>
                </a>
                <a href="https://github.com/tuusuario" target="_blank" aria-label="GitHub">
                  <img src="github.png" alt="GitHub Logo" className="contact-socials max-w-16"/>
                </a>
              </div>
              </div>
            </section>
          </div>

    

      </div>
  );
}
