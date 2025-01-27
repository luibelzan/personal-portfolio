import { useTranslations } from "next-intl";
import styles from "../../../page.module.css";
export default function Morsan() {

    const t = useTranslations('Morsan');

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-12 pb-3">Morsan</h1>
                <div className="box3 shared-style">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-20">{t('morsanShortDescription')}</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage pb-10" src="/morsan/morsancollage.png"></img>\
                        <p className="project-description text-black">{t('morsanLongDescription')}</p>
                        <img src="/morsan/checkout.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }