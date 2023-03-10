let card_number = document.querySelector("#card_number");
let input_number = document.querySelector("#input_number");

let card_name = document.querySelector("#card_name");
let input_name = document.querySelector("#input_name");

let card_month = document.querySelector("#card_month");
let input_month = document.querySelector("#input_month");

let card_year = document.querySelector("#card_year");
let input_year = document.querySelector("#input_year");

let card_cvc = document.querySelector("#card_cvc");
let input_cvc = document.querySelector("#input_cvc");

let form = document.querySelector("#form");
let completed = document.querySelector("#completed");
let continue_button = document.querySelector("#continue");


let warning_name = document.querySelector("#warning_name");
let warning_number = document.querySelector("#warning_number");
let warning_date = document.querySelector("#warning_date");
let warning_cvc = document.querySelector("#warning_cvc");



let realNumber = []; 
let inputNumber = [];
let realName = "";
let realMonth = "";
let realYear = "";
let realCvc = "";

let ok = [];

makeOriginalNumber();
makeOriginalName();
makeOriginalDate();
makeOriginalCvc();

input_number.addEventListener("keyup", addNumber);
input_name.addEventListener("keyup", addName);
input_month.addEventListener("keyup", addMonth);
input_year.addEventListener("keyup", addYear);
input_cvc.addEventListener("keyup", addCvc);

form.addEventListener('submit', e => {
    e.preventDefault();
    verify();
})



function addNumber(){
    input_number.value = this.value.replace(/\s/g, "").replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    removeWarning(input_number, warning_number);
    inputNumber = String(this.value).replace(/\s/g, "").split("").map((num)=>{
        return String(num);
    });
    for (let i=0; i<=inputNumber.length; i++){
         realNumber.splice(i, 20, inputNumber[i])
    }
    printNumber();
}



function addName(){
    realName = input_name.value;
    removeWarning(input_name, warning_name);
    printName();
}

function addMonth(){
    realMonth = input_month.value;
    removeWarning(input_month, warning_date);
    printMonth();
}

function addYear(){
    realYear = input_year.value;
    removeWarning(input_year, warning_date);
    printYear();
}

function addCvc(){
    realCvc = input_cvc.value;
    removeWarning(input_cvc, warning_cvc);
    printCvc();
}

function makeOriginalName(){
    input_name.value = "";
    realName = "Jane Apleseed";  
    printName();
}

function makeOriginalNumber (){
    input_number.value = "";
    inputNumber = [];
    realNumber = [];
    for (let i=0; i<16; i++){
        realNumber[i] = "0";
    }
    printNumber();
}

function makeOriginalDate(){
    input_month.value = "";
    input_year.value = "";
    realMonth = "00";
    realYear = "00";
    printMonth();
    printYear();
}

function makeOriginalCvc(){
    input_cvc.value = "";
    realCvc = "000";
    printCvc();
}

function printNumber(){
    for (let i=0, j = 9; i<16; i++){
        if(i==4 || i == j){
           realNumber.splice(i, 0, " ");
           if(i!=4) j+=5;
        }
    }
    card_number.innerHTML = realNumber.toString().replaceAll(",", "");
}

function printName(){
    card_name.innerHTML = realName;
}

function printMonth(){
    card_month.innerHTML = realMonth;
}
function printYear(){
    card_year.innerHTML = realYear;
}
function printCvc(){
    card_cvc.innerHTML = realCvc;
}

function verify(){
    if(handleName()){
        ok.push(true);
    }
    else ok.push(false);

    if(handleNumber()){
        ok.push(true);
    }
    else ok.push(false);

    if(handleMonth()){
        ok.push(true);
    }
    else ok.push(false);
    if(handleYear()){
        ok.push(true);
    }
    else ok.push(false);
    if(handleCvc()){
        ok.push(true);
    }
    else ok.push(false);

    if(ok.indexOf(false) == -1){
        form.style.display = "none";
        completed.style.display = "flex";
        continue_button.addEventListener("click", restartForm);
    }
    

    ok.splice(0, 20);
}

function handleName(){
    if(input_name.value.split("").length==0){
        addWarning(warning_name, input_name, "Can't be blank");
        return false;
    }
    else if(input_name.value.split("").length<4){
        addWarning(warning_name, input_name, "Name is too short. Use more than 3 letters");
        return false;
    }
    else return true;
}

function handleNumber(){
    if(inputNumber.length==0){
        addWarning(warning_number, input_number, "Can't be blank");
        return false;
    }
    else if (inputNumber.length < 16){
        addWarning(warning_number, input_number, "Need more numbers");
        return false;
    }
    
    else if(!(inputNumber.toString().replaceAll(",","").match(/^[1-9]+$/gi))){
        addWarning(warning_number, input_number, "Wrong format, numbers only");
        return false;
    }
    else return true;
}

function handleMonth(){
    if(input_month.value.split("").length==0){
        addWarning(warning_date, input_month, "Can't be blank");
        return false;
    }
    else if(input_month.value.split("").length<2){
        addWarning(warning_date, input_month, "Use two digits for dates");
        return false;
    }
    else if(input_month.value<1 || input_month.value>12){
        addWarning(warning_date, input_month, "Unvalid date");
        return false;
    }
    else return true;
}
function handleYear(){
    if(input_year.value.split("").length==0){
        addWarning(warning_date, input_year, "Can't be blank");
        return false;
    }
    else if(input_year.value.split("").length<2){
        addWarning(warning_date, input_year, "Use two digits for dates");
        return false;
    }
    else if(input_year.value<1){
        addWarning(warning_date, input_year, "Unvalid date");
        return false;
    }
    else return true;
}

function handleCvc(){
    if(input_cvc.value.split("").length==0){
        addWarning(warning_cvc, input_cvc, "Can't be blank");
        return false;
    }
    else if(input_cvc.value.toString().match(/[a-z]/gi)){
        addWarning(warning_cvc, input_cvc, "Wrong format, numbers only");
        return false;
    }
    else if(input_cvc.value.split("").length<3){
        addWarning(warning_cvc, input_cvc, "Need more numbers");
        return false;
    }
    else return true;
}

function addWarning(input, warning, text){
    input.innerHTML = `${text}`;
    warning.classList.add("warning_input");
}

function removeWarning(input, warning){ 
    input.classList.remove("warning_input");
    warning.innerHTML = "";
}


function restartForm(){
    makeOriginalNumber();
    makeOriginalName();
    makeOriginalDate();
    makeOriginalCvc();
    form.style.display = "flex";
    completed.style.display = "none";
}