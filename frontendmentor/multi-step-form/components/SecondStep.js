import Continue from "@/items/Continue";
import Return from "@/items/Return";

export default function SecondStep({actionContinue, actionReturn}){
    return(
        <>
            Select your plan
            You have the option of monthly or yearly billing.

            Arcade
            $9/mo

            Advanced
            $12/mo

            Pro
            $15/mo

            Monthly
            Yearly

            <Return action={actionReturn}/>
            <Continue action={actionContinue}/>
        </>
    )
}