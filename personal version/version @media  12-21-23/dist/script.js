const ThemeChanger=document.querySelector(".ThemeChanger")
const changerButton=document.querySelector(".changerButton")
const CountFirstPerCent=document.querySelector(".CountFirstPerCent")
const coolMoves=document.querySelector(".coolMoves")
const num1=document.querySelector(".num1")
const num2=document.querySelector(".num2")
const num3=document.querySelector(".num3")
const num4=document.querySelector(".num4")


ThemeChanger.addEventListener("click" , function(){
    if (changerButton.style.transform==="translate(-25px)"){
        changerButton.style.transform="translate(-0px)"
    }else{
        changerButton.style.transform="translate(-25px)"
     }

})
let FbNum=num1.textContent+num2.textContent+num3.textContent+num4.textContent
FbNum=parseInt(FbNum)
let num1Int;
let num2Int;
let num3Int;
let num4Int;
console.log(num1Int)
num1Int=parseInt(num1.textContent)
num2Int=parseInt(num2.textContent)
num3Int=parseInt(num3.textContent)
num4Int=parseInt(num4.textContent)
const todaysStart1=1987
const todaysStart2=1044
const todaysStart3=11000
const todaysStart4=8239
const persent1=document.querySelector(".persent1")
const persent2=document.querySelector(".persent2")
const persent3=document.querySelector(".persent3")
const persent4=document.querySelector(".persent4")
document.addEventListener("DOMContentLoaded", function() {

    function changeText() {
        const randomNumber1 = Math.floor(Math.random() *15 - 5 );
        const randomNumber2 = Math.floor(Math.random() *15 - 5 );
        const randomNumber3 = Math.floor(Math.random() *15 - 5 );
        const randomNumber4 = Math.floor(Math.random() *15 - 5 );
        if (num1Int<0){
            num1Int=0
        }
        if (num2Int<0){
            num2Int=0;
        }
        if (num2Int<0){
            num3Int=0;
        }
        if (num4Int<0){
            num4Int=0;
        }
        num1Int+=randomNumber1
        num1.textContent=num1Int;
        num1.classList.add("cool")
        let perCent1=0;
        perCent1+=((num1Int-todaysStart1)/todaysStart1)*100
        perCent1=parseInt(perCent1)
        persent1.textContent=`${perCent1}%`
        persent1.classList.add("cool")
        //---
        num2Int+=randomNumber2
        num2.textContent=num2Int;
        num2.classList.add("cool")
        let perCent2=0;
        perCent2+=((num2Int-todaysStart2)/todaysStart2)*100
        perCent2=parseInt(perCent2)
        persent2.textContent=`${perCent2}%`
        persent2.classList.add("cool")
        //---
        num3Int+=randomNumber3
        num3.textContent=num3Int;
        num3.classList.add("cool")
        let perCent3=0;
        perCent3+=((num3Int-todaysStart3)/todaysStart3)*100
        perCent3=parseInt(perCent3)
        persent3.textContent=`${perCent3}%`
        persent3.classList.add("cool")
        //---
        num4Int+=randomNumber4
        num4.textContent=num4Int;
        num4.classList.add("cool")
        //---
        let perCent4=0;
        perCent4+=((num4Int-todaysStart4)/todaysStart4)*100
        perCent4=parseInt(perCent4)
        persent4.textContent=`${perCent4}%`
        persent4.classList.add("cool")
        //---
        setTimeout(function(){
        persent1.classList.remove("cool")
        persent2.classList.remove("cool")
        persent3.classList.remove("cool")
        persent4.classList.remove("cool")
        num1.classList.remove("cool")
        num2.classList.remove("cool")
        num3.classList.remove("cool")
        num4.classList.remove("cool")
    },1000)}
    changeText();
    setInterval(changeText, 5000);

});
