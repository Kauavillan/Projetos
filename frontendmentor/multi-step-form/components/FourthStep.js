import Continue from "@/items/Continue";
import Return from "@/items/Return";
import stylesButtons from "../styles/ButtonDiv.module.css";
import formStyles from "../styles/StepsForm.module.css";
export default function FourthStep({actionContinue, actionReturn}){
    return(<div className={formStyles.step}>
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>

    {/* <!-- Dynamically add subscription and add-on selections here --> */}

    <p>Total (per month/year)</p>

    <div className={stylesButtons.container}>
        <Return action={actionReturn}/>
        <Continue action={actionContinue} text="Confirm"/>
    </div>
    </div>)
}