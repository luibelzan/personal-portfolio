import styles from "../../page.module.css";
export default async function Page() {

    return (
        <div className="project-page w-full">
            <div className="container flex items-center flex-col m-auto overflow-hidden py-16 px-8">
                <h1 className="project-name mt-12 pb-3">SOAPMeterFlow Service</h1>
                <div className="box3 shared-style">
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                    <span className={styles['mi-clase']}></span>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <h2 className="project-short-description pb-20">Servicio encargado de automatizar la lectura de los contadores inteligentes de la luz</h2>
                    <div className="flex flex-col items-center">
                        <img className="collage pb-10" src="/morsan/morsancollage.png"></img>\
                        <p className="project-description text-black">SOAP Meter Flow es un servicio desarrollado con TypeScript y compatible con multiples bases de datos postgres. El servicio hace uso de funciones asincronas para completar la automatizacion de la lectura de los contadores para cada cliente en paralelo.</p>
                        <p className="project-description text-black">La ejecucion del servicio es la siguiente.
                            Primero, con servidor Expressjs recibimos los webservices con SOAP que contienen la informacion enviada por el contador inteligente. El siguiente paso es almacenar cada uno de los mensajes recibidos en la base de datos del cliente correspondiente. A continuacion implementamos un algoritmo que se encarga de detectar que contadores no han enviado informacion en una fecha determinada. 
                            Por ultimo, solicitamos la informacion que nos falta para esa fecha concreta a traves de Webservices, de forma que si recuperamos la informacion se almacenara en la base de datos y se vuelve e ejecutar el algoritmo anterior para comprobar que hemos recuperado la informacion. 
                        </p>
                        <img src="/morsan/checkout.png" className="pb-20"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }