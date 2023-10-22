import Continue from "@/items/Continue";
import Return from "@/items/Return";
import stylesButtons from "../styles/ButtonDiv.module.css";
import formStyles from "../styles/StepsForm.module.css";
import styles from "../styles/SecondStep.module.css";
import { useState } from "react";
import Plan from "@/items/Plan";
export default function SecondStep({actionContinue, actionReturn, savedDate, savedArcade, savedAdv, savedPro, savedSelectedPlan, saveData}){
    const [isYearly, setIsYearly] = useState(savedDate);
    const [arcadeCost, setArcadeCost] = useState(savedArcade);
    const [advancedCost, setAdvancedCost] = useState(savedAdv);
    const [proCost, setProCost] = useState(savedPro);
    const [selectedPlan, setSelectedPlan] = useState(savedSelectedPlan);

    function handleCheckbox(e){
        setIsYearly(e.target.checked);
        if(e.target.checked){
            setArcadeCost(90);
            setAdvancedCost(120);
            setProCost(150);
        }
        else{
            setArcadeCost(9);
            setAdvancedCost(12);
            setProCost(15);
        }
    }
    function handleArcade(){
        setSelectedPlan({arcade:true, advanced: false, pro: false});
    }
    function handleAdvanced(){
        setSelectedPlan({arcade:false, advanced: true, pro: false});
    }
    function handlePro(){
        setSelectedPlan({arcade:false, advanced: false, pro: true});
    }

    function saveAndReturn(){
        if(selectedPlan.arcade || selectedPlan.advanced || selectedPlan.pro){
            saveData(isYearly, arcadeCost, advancedCost, proCost, selectedPlan);
            actionReturn();
        }
       
    }
    function saveAndContinue(){
        if(selectedPlan.arcade || selectedPlan.advanced || selectedPlan.pro){
            saveData(isYearly, arcadeCost, advancedCost, proCost, selectedPlan);
            actionContinue();
        }
        
    }
    return(
        <div className={formStyles.step}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={styles.container}>
                <div className={styles.plans}>
                    <Plan src="assets/images/icon-arcade.svg" alt="Icon arcade" text="Arcade" click={handleArcade} selected={selectedPlan.arcade} cost={arcadeCost} yearly={isYearly}/>

                    <Plan src="assets/images/icon-advanced.svg" alt="Icon advanced" text="Advanced" click={handleAdvanced} selected={selectedPlan.advanced} cost={advancedCost} yearly={isYearly}/>

                    <Plan src="assets/images/icon-pro.svg" alt="Icon pro" text="Pro" cost={proCost} click={handlePro} selected={selectedPlan.pro} yearly={isYearly}/>
                </div>
                
                <div className={styles.period}>
                    <span className={`${isYearly == false && styles.strong}`}>Monthly</span>
                    <input type="checkbox" id="toggle" className={styles.chk} checked={isYearly} onChange={handleCheckbox}/>
                    <label for="toggle" className={styles.toggle}>
                        <span></span>
                    </label>
                    <span className={`${isYearly && styles.strong}`}>Yearly</span>
                </div>
                
            </div>
            <div className={stylesButtons.container}>
                <Return action={saveAndReturn}/>
                <Continue action={saveAndContinue}/>
            </div>
        </div>
    )
}