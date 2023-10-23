import styles from "../styles/Add-ons.module.css";
export default function Add_Ons({isChecked, handleChange, title, date, description, cost}){
    return(
    <div className={`${isChecked && styles.active} ${styles.opt}`} onClick={handleChange} >
        <div className={styles.checkContainer}>
            <input type="checkbox" id={title} checked={isChecked} onChange={handleChange}/>
            <label for={title}></label>
        </div>
        <div>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
        <div>
            <span>+${cost}/{date}</span>
        </div>
    </div>
    )
}