import styles from "../styles/FormInput.module.css"
export default function FormInput({label, type="text", id, placeholder}){
    return(
        <div className={styles.input}>
            <label for={id}>{label}</label>
            <input type={type} name={id} id={id} placeholder={placeholder}/>
        </div>
    )
}