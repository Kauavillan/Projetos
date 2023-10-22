import Continue from "@/items/Continue";
import Return from "@/items/Return";
import stylesButtons from "../styles/ButtonDiv.module.css";
import formStyles from "../styles/StepsForm.module.css";
import styles from "../styles/ThirdStep.module.css";
import Add_Ons from "@/items/Add-ons";
import { useState } from "react";
export default function ThirdStep({actionContinue, isYearly, savedCheckboxes, savedPrice, saveData, actionReturn}){
    const [checkboxes, setCheckboxes] = useState(savedCheckboxes);
    const [price, setPrice] = useState(savedPrice);
    const [addOnsPrices, setAddOnsPrices] = useState({
        online: isYearly ? 10 : 1,
        storage: isYearly ? 20 : 2,
        profile: isYearly ? 20 : 2,
    })

    function handleCkb1(){
        setCheckboxes((prevCheckboxes)=>({
            ...prevCheckboxes, 
            cb1: !prevCheckboxes.cb1
        }));
        !checkboxes.cb1 ? setPrice(price+addOnsPrices.online):setPrice(price-addOnsPrices.online);
    }

    function handleCkb2(){
        
        setCheckboxes((prevCheckboxes)=>({
            ...prevCheckboxes, 
            cb2: !prevCheckboxes.cb2
        }));
        !checkboxes.cb2 ? setPrice(price+addOnsPrices.storage):setPrice(price-addOnsPrices.storage);
        
    }

    function handleCkb3(){
        setCheckboxes((prevCheckboxes)=>({
            ...prevCheckboxes, 
            cb3: !prevCheckboxes.cb3
        }));
        !checkboxes.cb3 ? setPrice(price+addOnsPrices.profile):setPrice(price-addOnsPrices.profile);
    }
    function saveAndContinue(){
        saveData(checkboxes, price);
        actionContinue();
    }
    function saveAndReturn(){
        saveData(checkboxes, price);
        actionReturn();
    }
    return(
        <div className={formStyles.step}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className={styles.options}>
                <Add_Ons isChecked={checkboxes.cb1} handleChange={handleCkb1} title="Online service" description="access to multiplayer games" cost={addOnsPrices.online} />

                <Add_Ons isChecked={checkboxes.cb2} handleChange={handleCkb2} title="Larger storage" description="Extra 1TB of cloud save" cost={addOnsPrices.storage} />

                <Add_Ons isChecked={checkboxes.cb3} handleChange={handleCkb3} title="Customizable Profile" description="Custom theme on your profile" cost={addOnsPrices.profile} />
            </div>
            <div className={stylesButtons.container}>
                <Return action={saveAndReturn}/>
                <Continue action={saveAndContinue}/>
            </div>
        </div>
    )
}