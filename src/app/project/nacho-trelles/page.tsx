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
                    <h2 className="project-short-description pb-4">Pagina web personal orientada a presentar la trayectoria, los proyectos y habilidades de Nacho Trelles.</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage pb-20" src="/nachotrelles/collagenacho.png"></img>\
                        <p className="project-description text-black">La web funciona como un portfolio en linea realizado con Wordpress donde se puede encontrar informacion sobre su experiencia, trabajos destacados, y servicios o contacto profesional, asi como unos cuestionarios para la preparacion de bomberos. Incorpora elementos visuales atractivos y un enfoque claro en la navegacion intuitiva para resaltar las fortalezas y capacidades del autor.</p>
                        <img src="/nachotrelles/libro.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }