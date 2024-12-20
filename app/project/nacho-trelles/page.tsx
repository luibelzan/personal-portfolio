import styles from "../../page.module.css";
export default async function Page() {

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-12 pb-3">Nacho Trelles</h1>
                <div className="box2 shared-style">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-4">Una plataforma Web3 para acu;ar activos digitales en la Blockchain de Ethereum</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage" src="/funkyart/collage5.png"></img>\
                        <p className="project-description text-black">Funky Art es una plataforma innovadora desarrollada como proyecto de fin de grado que permite a los usuarios mintear NFTs en la blockchain de manera sencilla. Implementada utilizando JavaScript, Next.js y Solidity, esta aplicación combina un diseño moderno con funcionalidades avanzadas de Web3, como la conexión con wallets, gestión de contratos inteligentes y despliegue seguro en la blockchain. El objetivo principal es ofrecer una experiencia intuitiva y eficiente para creadores y coleccionistas en el ecosistema de los NFTs.</p>
                        <img src="/funkyart/nft.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }