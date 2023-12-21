const ThemeChanger=document.querySelector(".ThemeChanger")
const changerButton=document.querySelector(".changerButton")
const CountFirstPerCent=document.querySelector(".CountFirstPerCent")
ThemeChanger.addEventListener("click" , function(){
    if (changerButton.style.transform==="translate(-45px)"){
        changerButton.style.transform="translate(-0px)"
    }else{
        changerButton.style.transform="translate(-45px)"
    }
})