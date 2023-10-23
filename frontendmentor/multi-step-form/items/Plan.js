import Image from "next/image";
import styles from "../styles/SecondStep.module.css"
export default function Plan({src, alt, text, cost, click, selected, yearly}){
    return(
        <div onClick={click} className={selected ? styles.selected : ""}>
            <Image src={src} width={50} height={50} alt={alt}/>
            <div>
                <h3>{text}</h3>
                <span>${cost}/{yearly?"yr":"mo"}</span>
                {yearly && <p>2 months free</p>}
            </div>
        </div>
    )
}