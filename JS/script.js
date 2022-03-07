
//change theme //
let buttons=document.querySelector('button')
let themeNormal=document.querySelector('.slider1')
let themeDarker=document.querySelector('.slider2')
let themePurple=document.querySelector('.slider3')
let themeManipulation=document.getElementById('changing');

console.log(themeManipulation)


function theme1(){
    themeNormal.classList.add('active');
    themeDarker.classList.remove('active');
    themePurple.classList.remove('active');
    themeManipulation.classList.remove('theme2');
    themeManipulation.classList.remove('theme3');
    themeManipulation.classList.add('theme1');
}

function theme2(){
    themeNormal.classList.remove('active');
    themeDarker.classList.add('active');
    themePurple.classList.remove('active');
    themeManipulation.classList.add('theme2')
    themeManipulation.classList.remove('theme3')
    themeManipulation.classList.remove('theme1')
}

function theme3(){
    themeNormal.classList.remove('active');
    themeDarker.classList.remove('active');
    themePurple.classList.add('active');
    themeManipulation.classList.remove('theme2');
    themeManipulation.classList.add('theme3');
    themeManipulation.classList.remove('theme1');
}