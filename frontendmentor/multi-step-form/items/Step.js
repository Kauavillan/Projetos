import styles from "../styles/Step.module.css"
export default function Step({number, active = false, text}){
    return(
    <div className={styles.step}>
        <div className={`${active == true ? styles.act : ""} ${styles.number}`}>{number}</div>
        <div className={styles.text}>
            <p>Step {number}</p>
            <span>{text}</span>
        </div>
        
    </div>
    )
}