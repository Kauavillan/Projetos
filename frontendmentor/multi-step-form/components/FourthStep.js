import Continue from "@/items/Continue";
import Return from "@/items/Return";
import stylesButtons from "../styles/ButtonDiv.module.css";
import formStyles from "../styles/StepsForm.module.css";
import styles from "../styles/FourthStep.module.css";
export default function FourthStep({actionContinue, actionReturn, returnToPlan,savedIsYearly, savedArcadeCost, savedAdvancedCost, savedProCost, savedAdOnsTotalCost, savedAddOnsPrices, savedSelectedPlan, selectedCheckboxes}){
    const findSelectedPlan = (plans) =>{
        for(const field in plans){
            if(plans[field] === true){
                return field;
            }
        }
    }
    const selectedPlan = findSelectedPlan(savedSelectedPlan);
    const shortenedDate = savedIsYearly ? "yr" : "mo";
    const planCost = savedSelectedPlan.arcade ? savedArcadeCost : savedSelectedPlan.advanced ? savedAdvancedCost : savedSelectedPlan.pro && savedProCost;
    const total = planCost+savedAdOnsTotalCost;
    return(<div className={formStyles.step}>
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
    <div className={styles.summary}>
        <div className={styles.sumPlan}>
            <div>
                <div>
                    {selectedPlan} ({savedIsYearly ? "yearly" : "monthly"})
                </div>
                <div>
                    ${planCost}/{shortenedDate}
                </div>
            </div>
             <div onClick={returnToPlan}>
                Change
            </div>
        </div>
        <div className={styles.sumAdOns}>
            {
                selectedCheckboxes.cb1 && 
                <div>
                    <div>Online service</div> 
                    <div>+${savedAddOnsPrices.online}/{shortenedDate}</div>
                </div>
            }
            {    
                selectedCheckboxes.cb2 && 
                <div>
                    <div>Larger storage</div>
                    <div>+${savedAddOnsPrices.storage}/{shortenedDate}</div>
                </div>
            }
            {
                selectedCheckboxes.cb3 && 
                <div>
                    <div>Customizable profile</div>
                    <div>+${savedAddOnsPrices.profile}/{shortenedDate}</div>
                </div>
            }
            
        </div>
    </div>

    <div className={styles.total}>
        <p>Total (per {savedIsYearly ? "year" : "month"})</p>
        <span>${total}/{shortenedDate}</span>
    </div>
    

    <div className={stylesButtons.container}>
        <Return action={actionReturn}/>
        <Continue action={actionContinue} text="Confirm"/>
    </div>
    </div>)
}