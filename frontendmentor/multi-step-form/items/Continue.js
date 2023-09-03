import styles from "../styles/Continue.module.css"
export default function Continue({text="Next Step", action}){
    return(
        <button onClick={action} className={styles.continue}>
            {text}
        </button>
    )
}