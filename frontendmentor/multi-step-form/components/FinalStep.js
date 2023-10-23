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
            Thanks for visiting this website! I really hope you liked it. If you did, feel free 
            to email me at <a href="mailto:kvn.contact.professional@gmail.com" target="_blank">kvn.contact.professional@gmail.com</a> or check my portfolio in <a href="https://kvnportfolio.vercel.app" target="_blank">kvnportfolio.vercel.app</a>.
        </p>
        </div>
    )
}