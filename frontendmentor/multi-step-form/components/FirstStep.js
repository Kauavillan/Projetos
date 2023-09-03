import Continue from "@/items/Continue";
import FormInput from "@/items/FormInput";
import Return from "@/items/Return";
import styles from "../styles/FirstStep.module.css"
export default function FirstStep({actionContinue}){
    return(
        <div className={styles.first}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        
        <form>
            <FormInput id="name" label="Name" placeholder="e.g. Stephen King"/>
            
            <FormInput id="email" label="Email Address" placeholder="e.g. stephenking@lorem.com"/>

            <FormInput id="phone" label="Phone Number" placeholder="e.g. +1 234 567 890"/>

        </form>
        <Continue action={actionContinue} />
        </div>
    )
}