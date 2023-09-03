import Step from "@/items/Step";
import styles from "../styles/Sidebar.module.css"
export default function Sidebar(){
    return (
    <div className={styles.sidebar}>
        <div className={styles.steps}>
            <Step number={1} text="Your info"/>
            <Step number={2} text="Select plan"/>
            <Step number={3} text="Add-ons"/>
            <Step number={4} text="Summary"/>
        </div>
        
    </div>
    )
}