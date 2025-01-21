import styles from "../../page.module.css";
export default async function Page() {

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
                    <h2 className="project-short-description pb-20">Tienda online especializada en ropa personalizada, donde la creatividad y el estilo se unen para ofrecer prendas unicas y adaptadas a los gustos de cada cliente.</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage pb-10" src="/morsan/morsancollage.png"></img>\
                        <p className="project-description text-black">Con un diseño moderno y fácil de navegar, la página permite explorar una amplia variedad de productos personalizables, desde camisetas y sudaderas hasta accesorios. Ideal para aquellos que buscan expresar su individualidad a través de la moda, Morsan.es combina calidad en materiales con opciones creativas de personalización para una experiencia de compra única.</p>
                        <img src="/morsan/checkout.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }