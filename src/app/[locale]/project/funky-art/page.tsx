import { useTranslations } from "next-intl";
import styles from "../../../page.module.css";
export default function FunkyArt() {

    const t = useTranslations('FunkyArt');

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-12 pb-3">Funky Art</h1>
                <div className="box shared-style">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-4">{t('funkyArtShortDescription')}</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage" src="/funkyart/collage5.png"></img>\
                        <p className="project-description text-black">{t('funkyArtLongDescription')}</p>
                        <img src="/funkyart/nft.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }