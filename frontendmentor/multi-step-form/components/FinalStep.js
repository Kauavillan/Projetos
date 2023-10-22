import Image from "next/image";
import formStyles from "../styles/StepsForm.module.css";
import Thanks from "public/assets/images/icon-thank-you.svg";
import styles from "../styles/FinalStep.module.css";
export default function FinalStep(){
    return(
        <div className={`${formStyles.step} ${styles.final}`}>
        <Image src={Thanks} alt="Thank you!"/>
        <h1>Thank you!</h1>

        <p>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
        </p>
        </div>
    )
}