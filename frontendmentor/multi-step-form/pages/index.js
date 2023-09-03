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
  function handleContinue(){
    setStep(step+1);
  }
  function handleReturn(){
    setStep(step-1);
  }
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>      
        <Sidebar/>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
          { step ==1 ?
            <FirstStep actionContinue={handleContinue} actionReturn={handleReturn}/>
            :
            step ==2 ?
            <SecondStep actionContinue={handleContinue} actionReturn={handleReturn}/>
            :
            step == 3 ?
            <ThirdStep actionContinue={handleContinue} actionReturn={handleReturn}/>
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
