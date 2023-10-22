import styles from "../styles/Return.module.css";

export default function Return({action}){
    return(
        <button onClick={action} className={styles.return}>
            Go back
        </button>
    )
}