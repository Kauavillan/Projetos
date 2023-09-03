import styles from "../styles/Step.module.css"
export default function Step({number, text}){
    return(
    <div className={styles.step}>
        <div className={styles.number}>{number}</div>
        <div className={styles.text}>
            <p>Step {number}</p>
            <span>{text}</span>
        </div>
        
    </div>
    )
}