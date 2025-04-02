import { useTranslations } from "next-intl";
import styles from "../../../page.module.css";
export default function NacoTrelles() {

    const t = useTranslations('NachoTrelles');

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-6 md:mt-0 pb-2 md:pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-md:mt-0">Nacho Trelles</h1>
                <div className="box2 shared-style md:w-full mt-28 max-md:mt-10">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-4 max-md:text-xl sm:text-2xl md:text-5xl max-md:pt-9 max-md:pb-9 md:pt-40 text-center">{t('nachoShortDescription')}</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage" src="/nachotrelles/collagenacho.png"></img>\
                        <p className="project-description text-xl max-md:text-sm max-md:text-center max-md:w-full text-start pb-4 text-black">{t('nachoLongDescription')}</p>
                        <img src="/nachotrelles/libro.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }