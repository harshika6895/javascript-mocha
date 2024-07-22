const baseURL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// for(let code in countryList){
//     console.log(code , countryList[code]);
// }


const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
        amount.value = "1";
    }

    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}.json`;
    let response =await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    console.log(rate);

    let finalAmount = amountVal * rate; 
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
};


for(let select of dropdowns){
    for(currCode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newoption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click" , (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})

window.addEventListener("load", ()=>{
    updateExchangeRate();
})
