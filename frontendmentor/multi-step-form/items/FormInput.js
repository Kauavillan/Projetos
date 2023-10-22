import styles from "../styles/FormInput.module.css"
export default function FormInput({label, type="text", id, value, error, textError, onChange, placeholder}){
    return(
        <div className={`${error && styles.error} ${styles.input}`}>
            <label for={id}>{label} {error && <span>{textError}</span>}</label>
            <input type={type} name={id} id={id} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}