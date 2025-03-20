'use client';
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectSlider = () => {
  const currentPath = usePathname();
  const locale = currentPath.split("/")[1] || "en";
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "Funky Art",
      description: t("project1Description"),
      image: "funkyart/funkyart.gif",
      url: "/project/funky-art",
    },
    {
      title: "Nacho Trelles",
      description: t("project2Description"),
      image: "nachotrelles/nachotrelles.png",
      url: "/project/nacho-trelles",
    },
    {
      title: "Morsan",
      description: t("project3Description"),
      image: "morsan/morsan.png",
      url: "/project/morsan",
    },
    {
      title: "SOAPMeterFlow",
      description: t("project4Description"),
      image: "soap/soap.png",
      url: "/project/soap-meter-flow",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="project-card text-center p-4 border rounded-3xl shadow-lg w-full mx-auto flex flex-col justify-between items-center">
      <div className="image-container w-full overflow-hidden rounded-3xl">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="project-image w-full object-cover rounded-3xl border-1 border-blue-800 shadow-lg"
        />
      </div>
      <h3 className="currProject md:text-4xl max-md:text-xl font-extrabold text-black mt-4">
        {currentProject.title}
      </h3>
      <p className="text-black text-xl max-md:text-xs italic max-w-xl mx-auto px-2">
        {currentProject.description} {" "}
        <Link href={`/${locale}${currentProject.url}`} className="text-blue-500 underline">
          {t("more")}
        </Link>
      </p>
      <div className="navigation-buttons flex justify-between w-full px-4 mt-4">
        <button
          onClick={prevProject}
          className="bg-red-500 text-white py-2 px-4 md:px-6 rounded-lg shadow-md hover:bg-red-700 transition-all"
        >
          {t("backProject")}
        </button>
        <button
          onClick={nextProject}
          className="bg-green-500 text-white py-2 px-4 md:px-6 rounded-lg shadow-md hover:bg-green-700 transition-all"
        >
          {t("nextProject")}
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
