
//change theme //
let buttons=document.querySelector('button')
let themeNormal=document.querySelector('.slider1')
let themeDarker=document.querySelector('.slider2')
let themePurple=document.querySelector('.slider3')

function theme1(){
    themeNormal.classList.add('active');
    themeDarker.classList.remove('active');
    themePurple.classList.remove('active');
}

function theme2(){
    themeNormal.classList.remove('active');
    themeDarker.classList.add('active');
    themePurple.classList.remove('active');
}

function theme3(){
    themeNormal.classList.remove('active');
    themeDarker.classList.remove('active');
    themePurple.classList.add('active');
}