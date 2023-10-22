import FinalStep from '@/components/FinalStep'
import FirstStep from '@/components/FirstStep'
import FourthStep from '@/components/FourthStep'
import SecondStep from '@/components/SecondStep'
import Sidebar from '@/components/Sidebar'
import ThirdStep from '@/components/ThirdStep'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
export default function Home() {
  const [step, setStep] = useState(1);
  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPhone, setSavedPhone] = useState("");
  const [savedIsYearly, setSavedIsYearly] = useState(false);
  const [savedArcadeCost, setSavedArcadeCost] = useState(9);
  const [savedAdvancedCost, setSavedAdvancedCost] = useState(12);
  const [savedProCost, setSavedProCost] = useState(15);
  const [savedPrice, setSavedPrice] = useState(0);
  const [savedSelectedPlan, setSavedSelectedPlan] = useState({
    arcade: false,
    advanced: false,
    pro: false
  });
  const [savedCheckboxes, setSavedCheckboxes] = useState({
    cb1: false,
    cb2: false,
    cb3: false
  })

  function restartAddOns(){
    setSavedCheckboxes({
      cb1: false,
      cb2: false,
      cb3: false
    });
    setSavedPrice(0);
  }

  function handleContinue(){
    setStep(step+1);
  }
  function handleReturn(){
    setStep(step-1);
  }
  function saveDataFirst(name, email, phone){
    setSavedName(name);
    setSavedEmail(email);
    setSavedPhone(phone);
  }
  
  function saveDataSecond(date, arcade, advanced, pro, selPlan){
    if(date!=savedIsYearly) restartAddOns();
    setSavedIsYearly(date);
    setSavedArcadeCost(arcade);
    setSavedAdvancedCost(advanced);
    setSavedProCost(pro);
    setSavedSelectedPlan(selPlan);
  }
  function saveDataThird(checkboxes, price){
    setSavedCheckboxes(checkboxes);
    setSavedPrice(price);
  }
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>      
        <Sidebar step={step}/>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
          { step ==1 ?
            <FirstStep actionContinue={handleContinue} savedName={savedName} savedEmail={savedEmail} savedPhone={savedPhone} saveData={saveDataFirst} actionReturn={handleReturn}/>
            :
            step ==2 ?
            <SecondStep actionContinue={handleContinue} savedDate={savedIsYearly} savedArcade={savedArcadeCost} savedAdv={savedAdvancedCost} savedPro={savedProCost} savedSelectedPlan={savedSelectedPlan} saveData={saveDataSecond} actionReturn={handleReturn}/>
            :
            step == 3 ?
            <ThirdStep actionContinue={handleContinue} savedCheckboxes={savedCheckboxes} isYearly={savedIsYearly} savedPrice={savedPrice} saveData={saveDataThird} actionReturn={handleReturn}/>
            :step == 4 ?
            <FourthStep actionContinue={handleContinue} actionReturn={handleReturn}/>
            :step ==5 &&
            <FinalStep actionContinue={handleContinue} actionReturn={handleReturn}/>
          }
          </div>
        </div>
      </div>
    </div>
  )
}
