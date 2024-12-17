import styles from "../../page.module.css";
export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    
    const project = (await params).slug
    return (
        <div className="project-page w-full">
            <div className="container mx-auto flex justify-between items-center flex-col m-auto overflow-hidden">
                <div className="box">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>
                <h1 className="pb-14 mb-8 text-4xl font-bold text-center text-black">Funky Art</h1>
            </div>
        </div>
    )
  }