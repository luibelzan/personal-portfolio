import styles from "../../page.module.css";
export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    
    const project = (await params).slug
    return (
        <div className="project-page w-full">
            <div className="container mx-auto flex items-center flex-col m-auto overflow-hidden">
                <h1 className="project-name text-5xl font-extrabold text-center text-gray-800 tracking-tight leading-tight mt-12 pb-3">Funky Art</h1>
                <div className="box">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-description">Plataforma Web3 para acu;ar activos digitales en la Blockchain de Ethereum</h2>
                    <div className="flex flex-row">
                        <p>texto</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }