import { useTranslations } from "next-intl";
import styles from "../../../page.module.css";
export default function SOAPMeterFlow() {

    const t = useTranslations('SOAPMeterFlow');

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-6 md:mt-0 pb-2 md:pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-md:mt-0">SOAPMeterFlow Service</h1>
                <div className="box4 shared-style md:w-full mt-28 max-md:mt-10">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-4 max-md:text-xl sm:text-2xl md:text-5xl max-md:pt-9 max-md:pb-9 md:pt-40 text-center">{t('SOAPShortDescription')}</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage pb-10 pt-16 max-md:pt-5 max-md:pb-5" src="/soap/soap.png"></img>\
                        <p className="project-description text-xl max-md:text-sm max-md:text-center max-md:w-full text-start pb-4 text-black">{t('SOAPLongDescription1')}</p>
                        <p className="project-description text-xl max-md:text-sm max-md:text-center max-md:w-full text-start pb-4 text-black">{t('SOAPLongDescription2')}</p>
                        <img src="/soap/soapf.png" className="pb-0"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }