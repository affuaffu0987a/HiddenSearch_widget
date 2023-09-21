const icon = document.querySelector(".fa-solid")
const inputs = document.querySelector("input")

let Click = 0
icon.addEventListener("click",()=>{
// console.log("I click");
if(Click==0){
    inputs.style. transform="translateX(0)"
    setTimeout(()=>{
        inputs.style.width = "50%"
    },150)
    Click = 1;
}else{
    inputs.style.width = "0%"
    setTimeout(()=>{
        inputs.style. transform="translateX(100%)"
    },200)
    Click=0;
}
})