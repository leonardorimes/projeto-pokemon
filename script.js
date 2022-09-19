const images = [ "img/charmander.png" ,"img/squirtle.png" , "img/bulbasaur.png"] ;
const backs = ["url(img/back.webp)", "url(img/fire.webp)", "url(img/water.webp)"];

const btnCharmander = document.querySelector('#btnCharmander');
const btnSquirtel = document.querySelector('#btnSquirtel');
const btnBulbasaur = document.querySelector('#btnBulbasaur');
const cardCharmander = document.querySelector('.card-charmander');
const cardSquirtel = document.querySelector('.card-squirtel');
const cardBulbasaur = document.querySelector('.card-bulbasaur');
const ok = document.querySelector('#btnOk');
const btnChoose = document.querySelectorAll('.btnChoose');
const Pokemonchoice = document.querySelector('.Pokemonchoice');

const bulbasaurAudio = new Audio("./sounds/Bulbasaur.wav");
const charmanderAudio  = new Audio("./sounds/charmander.wav");
const squirtelAudio  = new Audio("./sounds/squirtel.wav");

btnSquirtel.addEventListener('click', () => {
    cardBulbasaur.classList.add('hide');
    cardSquirtel.classList.remove('hide');
    cardCharmander.classList.add('hide')

    Pokemonchoice.src = images[1];
    document.body.style.backgroundImage = backs[2];
    document.body.style.backgroundSize = 'cover';

    squirtelAudio.play();
    
    

});

btnCharmander.addEventListener('click', () => {
    cardBulbasaur.classList.add('hide');
    cardSquirtel.classList.add('hide');
    cardCharmander.classList.remove('hide');

    Pokemonchoice.src = images[0];
    document.body.style.backgroundImage = backs[1];
    document.body.style.backgroundSize = 'cover';
    
    charmanderAudio.play();
    
    

});

btnBulbasaur.addEventListener('click', () => {
    cardBulbasaur.classList.remove('hide');
    cardSquirtel.classList.add('hide');
    cardCharmander.classList.add('hide');

    Pokemonchoice.src = images[2];
    document.body.style.backgroundImage = backs[0];
    document.body.style.backgroundSize = 'cover';
    bulbasaurAudio.play();
   
    

});

function popup(){
    let blur = document.getElementById("blur");
    blur.classList.toggle('active');
    
    let popup = document.getElementById("popup");
    popup.classList.toggle('active');

}

ok.addEventListener('click', popup );


for(let ch of btnChoose){

    ch.addEventListener('click', popup);

}

