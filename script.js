const elForm = document.querySelector('#form');
const elInput = elForm.querySelector('#input');
const elButton = elForm.querySelector('#button');
const elTextPiyoda = document.querySelector('#text__piyoda');
const elTextVelosiped = document.querySelector('#text__velosiped');
const elTextMashina = document.querySelector('#text__mashina');
const elTextSamolyot = document.querySelector('#text__samolyot');

let piyoda = 3.6;
let velosiped = 20.1;
let mashina = 70;
let samolyot = 800;
const minute = 60;

let elInputValue = Number(elInput.value);

elForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(!isNaN(elInputValue)){
        let resultPiyoda = Math.floor(elInput.value/piyoda) + ' soat ' + ((elInput.value%piyoda)/piyoda*minute).toFixed(0) +' minut';
        elTextPiyoda.textContent=resultPiyoda;
        let resultVelosiped = Math.floor(elInput.value/velosiped) + ' soat ' + ((elInput.value%velosiped)/velosiped*minute).toFixed(0) +' minut';
        elTextVelosiped.textContent=resultVelosiped;
        let resultMashina = Math.floor(elInput.value/mashina) + ' soat ' + ((elInput.value%mashina)/mashina*minute).toFixed(0) +' minut';
        elTextMashina.textContent=resultMashina;
        let resultSamolyot = Math.floor(elInput.value/samolyot) + ' soat ' + ((elInput.value%samolyot)/samolyot*minute).toFixed(0) +' minut';
        elTextSamolyot.textContent=resultSamolyot;
    }else{

    }
    input.value = ""
})