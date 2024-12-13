import styles from "../../page.module.css";
export default async function Page({params,}: {params: Promise<{ slug: string }>}) {
    
    const project = (await params).slug
    return (
    <div className="flex justify-center h-screen items-center mx-auto">
        <div className="box">
            <span className={styles['mi-clase']}></span>
            <span className={styles['mi-clase']}></span>
            <span className={styles['mi-clase']}></span>
            <span className={styles['mi-clase']}></span>
        </div>
    </div>

    )
  }