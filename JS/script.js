
//change theme //
let buttons=document.querySelector('button')
let themeNormal=document.querySelector('.slider1')
let themeDarker=document.querySelector('.slider2')
let themePurple=document.querySelector('.slider3')
let themeManipulation=document.getElementById('changing');

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

// pocitanie kalkulacka 
let result=document.querySelector(".result");
let multi=document.querySelector('.multi');





let calcBtn = Array.from(document.getElementsByClassName('primary_btn'));

calcBtn.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                result.innerText = '';
                
            break;
            case 'X':
            target.innerText ='*';
            break
            case 'DEL':
            result.innerText= result.innerText.slice(0, -1);
            break;
            case '=':
            result.innerText=eval(result.innerText);
            break;
            default:
            result.innerText += e.target.innerText;
        }
        
    })
})
