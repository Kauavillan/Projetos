import Continue from "@/items/Continue";
import Return from "@/items/Return";

export default function FourthStep({actionContinue, actionReturn}){
    return(<>
    Finishing up
    Double-check everything looks OK before confirming.

    {/* <!-- Dynamically add subscription and add-on selections here --> */}

    Total (per month/year)

    <Return action={actionReturn}/>
    <Continue text="Confirm" action={actionContinue}/>
    </>)
}