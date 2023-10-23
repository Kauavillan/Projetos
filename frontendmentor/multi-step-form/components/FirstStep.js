import Continue from "@/items/Continue";
import FormInput from "@/items/FormInput";
import styles from "../styles/StepsForm.module.css";
import stylesButtons from "../styles/ButtonDiv.module.css";
import { useState } from "react";
export default function FirstStep({actionContinue, saveData, savedName, savedEmail, savedPhone}){
    const [name, setName] = useState(savedName);
    const [email, setEmail] = useState(savedEmail);
    const [phone, setPhone] = useState(savedPhone);
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorNameText, setErrorNameText] = useState("");
    const [errorEmailText, setErrorEmailText] = useState("");
    const [errorPhoneText, setErrorPhoneText] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const letterHunter = /^$|[0-9()+-]$/;
    let ok;
    function handleName(e){
        if(errorName) setErrorName(false);
        setName(e.target.value);
    }

    function handleEmail(e){
        if(errorEmail) setErrorEmail(false);
        setEmail(e.target.value);      
    }

    function handlePhone(e){
        if(errorPhone) setErrorPhone(false);
        if(letterHunter.test(e.target.value)) setPhone(e.target.value);        
    }

    function verifyForm(){
        ok = true;
        if(name == ""){
            setErrorName(true);
            setErrorNameText("This field is required");
            ok = false;
        }
        if(email == ""){
            setErrorEmail(true);
            setErrorEmailText("This field is required");
            ok = false;
        }
        else if (!(emailRegex.test(email))){
            setErrorEmail(true);
            setErrorEmailText("Unvalid email");
            ok = false;
        }
        if(phone == ""){
            setErrorPhone(true);
            setErrorPhoneText("This field is required");
            ok = false;
        }
        else if (phone.length > 20){
            setErrorPhone(true);
            setErrorPhoneText("Phone number is too long");
            ok = false;
        }
        if (ok){
            saveData(name, email, phone);
            actionContinue();
        } 
          
    }
    return(
        <div className={styles.step}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
        
        <form>
            <FormInput id="name" label="Name" value={name} onChange={handleName}  error={errorName} textError={errorNameText} placeholder="e.g. Stephen King"/>
            
            <FormInput id="email" label="Email Address" value={email} onChange={handleEmail} error={errorEmail} textError={errorEmailText} placeholder="e.g. stephenking@lorem.com"/>

            <FormInput id="phone" label="Phone Number" value={phone} onChange={handlePhone} error={errorPhone} textError={errorPhoneText} placeholder="e.g. +1 234 567 890"/>
        </form>
            <div className={`${stylesButtons.reverse} ${stylesButtons.container}`}>
                    <Continue action={verifyForm}/>
            </div>
        </div>
    )
}