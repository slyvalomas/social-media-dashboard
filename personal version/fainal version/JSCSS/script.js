const ThemeChanger=document.querySelector(".ThemeChanger")
const changerButton=document.querySelector(".changerButton")
const CountFirstPerCent=document.querySelector(".CountFirstPerCent")
const coolMoves=document.querySelector(".coolMoves")
const num1=document.querySelector(".num1")
const num2=document.querySelector(".num2")
const num3=document.querySelector(".num3")
const num4=document.querySelector(".num4")
const html=document.querySelector("html")
const body=document.querySelector("body")
const footer=document.querySelector(".footer")
const totalFollowers=document.querySelector(".totalFollowers")
const followersCounter=document.querySelector(".followersCounter")
const followersORsubs=document.querySelector(".followersORsubs")
const textBetween=document.querySelector(".textBetween")
const countByNUM=document.querySelector(".countByNUM")
const SocialMedia=document.querySelector(".SocialMedia")
const overviewSocialMedia=document.querySelector(".overviewSocialMedia")
const logosAndText=document.querySelector(".logosAndText")
//---
const socialBlock1=document.querySelector(".socialBlock1")
const socialBlock2=document.querySelector(".socialBlock2")
const socialBlock3=document.querySelector(".socialBlock3")
const socialBlock4=document.querySelector(".socialBlock4")
const socialBlock5=document.querySelector(".socialBlock5")
const socialBlock6=document.querySelector(".socialBlock6")
const socialBlock7=document.querySelector(".socialBlock7")
const socialBlock8=document.querySelector(".socialBlock8")
//---
const view1=document.querySelector(".view1")
const view2=document.querySelector(".view2")
const view3=document.querySelector(".view3")
const view4=document.querySelector(".view4")
const view5=document.querySelector(".view5")
const view6=document.querySelector(".view6")
const view7=document.querySelector(".view7")
const view8=document.querySelector(".view8")
//---
const follow1=document.querySelector(".follow1")
const follow2=document.querySelector(".follow2")
const follow3=document.querySelector(".follow3")
const follow4=document.querySelector(".follow4")
const follow5=document.querySelector(".follow5")
const follow6=document.querySelector(".follow6")
const follow7=document.querySelector(".follow7")
const follow8=document.querySelector(".follow8")
const follow9=document.querySelector(".follow9")
const follow10=document.querySelector(".follow10")
const follow11=document.querySelector(".follow11")
const follow12=document.querySelector(".follow12")
//--- 
const facebook=document.querySelector(".facebook")
const twitter=document.querySelector(".twitter")
const instagram=document.querySelector(".instagram")
const youtube=document.querySelector(".youtube")
//---
const DarkToLightText=document.querySelector(".DarkToLightText")

ThemeChanger.addEventListener("click" , function(){
    if (changerButton.style.transform==="translate(-25px)"){
        changerButton.style.transform="translate(-0px)"
        DarkToLightText.textContent="light"
        DarkToLightText.style.color="black"
        html.classList.remove('TotalBackGround')
        body.classList.remove('InsideBackGround')
        //-------text color
        footer.classList.remove('textColor')
        totalFollowers.classList.remove('textColor')
        //--- nums color
        num1.classList.remove('textColor')
        num2.classList.remove('textColor')
        num3.classList.remove('textColor')
        num4.classList.remove('textColor')
        follow5.classList.remove('textColor')
           follow6.classList.remove('textColor')
           follow7.classList.remove('textColor')
           follow8.classList.remove('textColor')
           follow9.classList.remove('textColor')
           follow10.classList.remove('textColor')
           follow11.classList.remove('textColor')
           follow12.classList.remove('textColor')
        //---follow collor
        follow1.classList.remove('TextUp')
        follow2.classList.remove('TextUp')
        follow3.classList.remove('TextUp')
        follow4.classList.remove('TextUp')
        view1.classList.remove('TextUp')
        view2.classList.remove('TextUp')
        view3.classList.remove('TextUp')
        view4.classList.remove('TextUp')
        view5.classList.remove('TextUp')
        view6.classList.remove('TextUp')
        view7.classList.remove('TextUp')
        view8.classList.remove('TextUp')
        //---
        textBetween.classList.remove('textColor')
        countByNUM.classList.remove('textColor')
        //---
        facebook.classList.remove('CardBackGround')
        twitter.classList.remove('CardBackGround')
        instagram.classList.remove('CardBackGround')
        youtube.classList.remove('CardBackGround')
        socialBlock1.classList.remove('CardBackGround')
        socialBlock2.classList.remove('CardBackGround')
        socialBlock3.classList.remove('CardBackGround')
        socialBlock4.classList.remove('CardBackGround')
        socialBlock5.classList.remove('CardBackGround')
        socialBlock6.classList.remove('CardBackGround')
        socialBlock7.classList.remove('CardBackGround')
        socialBlock8.classList.remove('CardBackGround')
        //----
        followersORsubs.classList.remove('TextUp')
        logosAndText.classList.remove('TextUp')
    }else{
        changerButton.style.transform="translate(-25px)"
        DarkToLightText.textContent="dark"
        DarkToLightText.style.color="white"
        html.classList.add('TotalBackGround')
        body.classList.add('InsideBackGround')
        //------ .footer,.totalFollowers,.followersCounter,.followersORsubs,.textBetween,.countByNUM
        footer.classList.add('textColor')
        totalFollowers.classList.add('textColor')
           //--- nums color
           num1.classList.add('textColor')
           num2.classList.add('textColor')
           num3.classList.add('textColor')
           num4.classList.add('textColor')
           follow5.classList.add('textColor')
           follow6.classList.add('textColor')
           follow7.classList.add('textColor')
           follow8.classList.add('textColor')
           follow9.classList.add('textColor')
           follow10.classList.add('textColor')
           follow11.classList.add('textColor')
           follow12.classList.add('textColor')
        //---follow collor
        follow1.classList.add('TextUp')
        follow2.classList.add('TextUp')
        follow3.classList.add('TextUp')
        follow4.classList.add('TextUp')
        view1.classList.add('TextUp')
        view2.classList.add('TextUp')
        view3.classList.add('TextUp')
        view4.classList.add('TextUp')
        view5.classList.add('TextUp')
        view6.classList.add('TextUp')
        view7.classList.add('TextUp')
        view8.classList.add('TextUp')
        //-----
        textBetween.classList.add('textColor')
        countByNUM.classList.add('textColor')
        //----.SocialMedia,.overviewSocialMedia
        facebook.classList.add('CardBackGround')
        twitter.classList.add('CardBackGround')
        instagram.classList.add('CardBackGround')
        youtube.classList.add('CardBackGround')
        socialBlock1.classList.add('CardBackGround')
        socialBlock2.classList.add('CardBackGround')
        socialBlock3.classList.add('CardBackGround')
        socialBlock4.classList.add('CardBackGround')
        socialBlock5.classList.add('CardBackGround')
        socialBlock6.classList.add('CardBackGround')
        socialBlock7.classList.add('CardBackGround')
        socialBlock8.classList.add('CardBackGround')
        //---.followersORsubs,.logosAndText
        followersORsubs.classList.add('TextUp')
        logosAndText.classList.add('TextUp')
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
//----
const todays_Start1=87
const todays_Start2=52
const todays_Start3=5462
const todays_Start4=52000
const todays_Start5=117
const todays_Start6=507
const todays_Start7=107
const todays_Start8=1407
follow5.textContent=todays_Start1
follow6.textContent=todays_Start2
follow7.textContent=todays_Start3
follow8.textContent=todays_Start4
follow9.textContent=todays_Start5
follow10.textContent=todays_Start6
follow11.textContent=todays_Start7
follow12.textContent=todays_Start8
let sec1Int=parseInt(follow5.textContent)
let sec2Int=parseInt(follow6.textContent)
let sec3Int=parseInt(follow7.textContent)
let sec4Int=parseInt(follow8.textContent)
let sec5Int=parseInt(follow9.textContent)
let sec6Int=parseInt(follow10.textContent)
let sec7Int=parseInt(follow11.textContent)
let sec8Int=parseInt(follow12.textContent)
const countBypercent=document.querySelector(".countBypercent")
console.log(countBypercent)

const secPercent1=document.querySelector(".secPercent1")
const secPercent2=document.querySelector(".secPercent2")
const secPercent3=document.querySelector(".secPercent3")
const secPercent4=document.querySelector(".secPercent4")
const secPercent5=document.querySelector(".secPercent5")
const secPercent6=document.querySelector(".secPercent6")
const secPercent7=document.querySelector(".secPercent7")
const secPercent8=document.querySelector(".secPercent8")
//----
const persent1=document.querySelector(".persent1")
const persent2=document.querySelector(".persent2")
const persent3=document.querySelector(".persent3")
const persent4=document.querySelector(".persent4")
const Count__1=document.querySelector(".Count__1")
const Count__2=document.querySelector(".Count__2")
const Count__3=document.querySelector(".Count__3")
const Count__4=document.querySelector(".Count__4")
const  relativeColor1=document.querySelector(".relativeColor1")
const  relativeColor2=document.querySelector(".relativeColor2")
const  relativeColor3=document.querySelector(".relativeColor3")
const  relativeColor4=document.querySelector(".relativeColor4")
const  relativeColor5=document.querySelector(".relativeColor5")
const  relativeColor6=document.querySelector(".relativeColor6")
const  relativeColor7=document.querySelector(".relativeColor7")
const  relativeColor8=document.querySelector(".relativeColor8")
document.addEventListener("DOMContentLoaded", function() {

    function changeText() {
        const randomNumber1 = Math.floor(Math.random() *20 - 10 );
        const randomNumber2 = Math.floor(Math.random() *20 - 10 );
        const randomNumber3 = Math.floor(Math.random() *20 - 10 );
        const randomNumber4 = Math.floor(Math.random() *20 - 10 );
        //---
        const LLrandomNumber1 = Math.floor(Math.random() *20 );
        const LLrandomNumber2 = Math.floor(Math.random() *5  );
        const LLrandomNumber3 = Math.floor(Math.random() *30 );
        const LLrandomNumber4 = Math.floor(Math.random() *30  );
        const LLrandomNumber5 = Math.floor(Math.random() *10 );
        const LLrandomNumber6 = Math.floor(Math.random() *15  );
        const LLrandomNumber7 = Math.floor(Math.random() *5   );
        const LLrandomNumber8 = Math.floor(Math.random() *15  );
        //-----
        
        sec1Int+=LLrandomNumber1
        follow5.textContent=sec1Int;
        follow5.classList.add("cool")
        let DayPerCent1=0;
        DayPerCent1+=((sec1Int-todays_Start1)/todays_Start1)*100
        DayPerCent1=parseInt(DayPerCent1)
        secPercent1.textContent=`${DayPerCent1}%`
        
        secPercent1.classList.add("cool")
        if (DayPerCent1<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent1">${DayPerCent1}%</span>`
            relativeColor1.style.color="red"
        }



        sec2Int+=LLrandomNumber2
        follow6.textContent=sec2Int;
        follow6.classList.add("cool")
        let DayPerCent2=0;
        DayPerCent2+=((sec2Int-todays_Start2)/todays_Start2)*100
        DayPerCent2=parseInt(DayPerCent2)
        secPercent2.textContent=`${DayPerCent2}%`
        secPercent2.classList.add("cool")
        if (DayPerCent2<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent2">${DayPerCent2}%</span>`
            relativeColor2.style.color="red"
        }
        sec3Int+=LLrandomNumber3
        follow7.textContent=sec3Int;
        follow7.classList.add("cool")
        let DayPerCent3=0;
        DayPerCent3+=((sec3Int-todays_Start3)/todays_Start3)*100
        DayPerCent3=parseInt(DayPerCent3)
        secPercent3.textContent=`${DayPerCent3}%`
        secPercent3.classList.add("cool")
        if (DayPerCent3<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent3">${DayPerCent1}%</span>`
            relativeColor3.style.color="red"
        }
        sec4Int+=LLrandomNumber4
        follow8.textContent=sec4Int;
        follow8.classList.add("cool")
        let DayPerCent4=0;
        DayPerCent4+=((sec4Int-todays_Start4)/todays_Start4)*100
        DayPerCent4=parseInt(DayPerCent4)
        secPercent4.textContent=`${DayPerCent4}%`
        secPercent4.classList.add("cool")
        if (DayPerCent4<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent4">${DayPerCent4}%</span>`
            relativeColor4.style.color="red"
        }
        sec5Int+=LLrandomNumber5
        follow9.textContent=sec5Int;
        follow9.classList.add("cool")
        let DayPerCent5=0;
        DayPerCent5+=((sec5Int-todays_Start5)/todays_Start5)*100
        DayPerCent5=parseInt(DayPerCent5)
        secPercent5.textContent=`${DayPerCent5}%`
        secPercent5.classList.add("cool")
        if (DayPerCent5<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent5">${DayPerCent5}%</span>`
            relativeColor5.style.color="red"
        }
        sec6Int+=LLrandomNumber6
        follow10.textContent=sec5Int;
        follow10.classList.add("cool")
        let DayPerCent6=0;
        DayPerCent6+=((sec6Int-todays_Start6)/todays_Start6)*100
        DayPerCent6=parseInt(DayPerCent6)
        secPercent6.textContent=`${DayPerCent6}%`
        secPercent6.classList.add("cool")
        if (DayPerCent6<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent6">${DayPerCent6}%</span>`
            relativeColor6.style.color="red"
        }
        
        sec7Int+=LLrandomNumber7
        follow11.textContent=sec7Int;
        follow11.classList.add("cool")
        let DayPerCent7=0;
        DayPerCent7+=((sec7Int-todays_Start7)/todays_Start7)*100
        DayPerCent7=parseInt(DayPerCent7)
        secPercent7.textContent=`${DayPerCent7}%`
        secPercent7.classList.add("cool")
        if (DayPerCent7<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent7">${DayPerCent7}%</span>`
            relativeColor7.style.color="red"
        }
        sec8Int+=LLrandomNumber8
        follow12.textContent=sec8Int;
        follow12.classList.add("cool")
        let DayPerCent8=0;
        DayPerCent8+=((sec8Int-todays_Start8)/todays_Start8)*100
        DayPerCent8=parseInt(DayPerCent8)
        secPercent8.textContent=`${DayPerCent8}%`
        secPercent8.classList.add("cool")
        if (DayPerCent8<0){
            countBypercent.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="secPercent8">${DayPerCent8}%</span>`
            relativeColor8.style.color="red"
        }
        ///-----
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
        if (perCent1<0){
            Count__1.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="persent1">${perCent1}%</span>Today`
            Count__1.style.color="red"
        }
        //---
        num2Int+=randomNumber2
        num2.textContent=num2Int;
        num2.classList.add("cool")
        let perCent2=0;
        perCent2+=((num2Int-todaysStart2)/todaysStart2)*100
        perCent2=parseInt(perCent2)
        persent2.textContent=`${perCent2}%`
        persent2.classList.add("cool")
        if (perCent2<0){
            Count__2.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="persent2">${perCent2}%</span>Today`
            Count__2.style.color="red"
        }
        //---
        num3Int+=randomNumber3
        num3.textContent=num3Int;
        num3.classList.add("cool")
        let perCent3=0;
        perCent3+=((num3Int-todaysStart3)/todaysStart3)*100
        perCent3=parseInt(perCent3)
        persent3.textContent=`${perCent3}%`
        persent3.classList.add("cool")
        if (perCent3<0){
            Count__3.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="persent3">${perCent3}%</span>Today`
            Count__3.style.color="red"
        }
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
        if (perCent4<0){
            Count__4.innerHTML=`<img src="images/icon-down.svg" alt=""><span class="persent4">${perCent4}%</span>Today`
            Count__4.style.color="red"
        }
        let sum=num1Int+num2Int+num3Int+num4Int
        totalFollowers.textContent=`TotalFollowers: ${sum}`
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
        follow9.classList.remove("cool")
        follow10.classList.remove("cool")
        follow11.classList.remove("cool")
        follow12.classList.remove("cool")
        follow5.classList.remove("cool")
        follow6.classList.remove("cool")
        follow7.classList.remove("cool")
        follow8.classList.remove("cool")
        secPercent1.classList.add("cool")
        secPercent2.classList.add("cool")
        secPercent3.classList.add("cool")
        secPercent4.classList.add("cool")
        secPercent5.classList.add("cool")
        secPercent6.classList.add("cool")
        secPercent7.classList.add("cool")
        secPercent8.classList.add("cool")
    },1000)}
    changeText();
    setInterval(changeText, 5000);


});
