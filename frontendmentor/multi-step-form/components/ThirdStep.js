import Continue from "@/items/Continue";
import Return from "@/items/Return";

export default function ThirdStep({actionContinue, actionReturn}){
    return(
        <>
        Pick add-ons
        Add-ons help enhance your gaming experience.

        Online service
        Access to multiplayer games
        +$1/mo

        Larger storage
        Extra 1TB of cloud save
        +$2/mo

        Customizable Profile
        Custom theme on your profile
        +$2/mo

        <Return action={actionReturn}/>
        <Continue action={actionContinue}/>
        </>
    )
}