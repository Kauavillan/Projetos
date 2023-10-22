import Step from "@/items/Step";
import styles from "../styles/Sidebar.module.css"
export default function Sidebar(active){
    return (
    <div className={styles.sidebar}>
        <div className={styles.steps}>
            <Step number={1} active = {active.step == 1 && true} text="Your info"/>
            <Step number={2} active = {active.step == 2 && true} text="Select plan"/>
            <Step number={3} active = {active.step == 3 && true} text="Add-ons"/>
            <Step number={4} active = {active.step == 4 && true || active.step == 5 && true} text="Summary"/>
        </div>
        
    </div>
    )
}