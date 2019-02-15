
//Pegar o Input do usuário(palpite).
// Gerar um neúmero aleatório entre 0 e 50 (usando a função).
// Definir que ele tem 10 vidas.

// Enquanto a vida for maior que 10 e palpite for diferente de gerado.
// Pegar o palpite e avaliar se ele for igual ao numero aleatorio.
// Usuario ganha o jogo se ele for diferente.
// Perde uma vida
// Se nao tiver mais vidas informa que perdeu jogo.
// Se ele for maior.
// Informa que o palpite foi maior que o numero gerado senão.
// Informa que o palpite foi menor que o numero gerado.

// const imgfrente= document.querySelectorAll('.memes');
// const imgtras = document.querySelector('.escondida');
const a1 = document.querySelector(".a1")
const b1= document.querySelector(".b1")
const c1= document.querySelector(".c1")
const d1= document.querySelector(".d1")
const a2= document.querySelector(".a2")
const b2= document.querySelector(".b2")
const c2= document.querySelector(".c2")
const d2= document.querySelector(".d2")



const a1Mostrar= function() {
    a1.classList.toggle('escondida');
}
const b1Mostrar= function() {
    b1.classList.toggle('escondida');
}
const c1Mostrar= function() {
    c1.classList.toggle('escondida');
}
const d1Mostrar= function() {
    d1.classList.toggle('escondida');
}
const a2Mostrar= function() {
    a2.classList.toggle('escondida');
}
const b2Mostrar= function() {
    b2.classList.toggle('escondida');
}
const c2Mostrar= function() {
    c2.classList.toggle('escondida');
}
const d2Mostrar= function() {
    d2.classList.toggle('escondida');
}



let chances= 4;

// const destaque= function(){
//     imgtras.classList.toggle('escondida');
// }
// imgfrente.onmouseenter=mostraracarta; 
// imgfrente.onmouseout=mostraracarta;

// imgtras.onmouseenter=destaque; 
// imgtras.onmouseout=destaque;

while( chances >0) {
    chances --;

}

a1.onclick = a1Mostrar
b1.onclick = b1Mostrar
c1.onclick = c1Mostrar
d1.onclick = d1Mostrar
a2.onclick = a2Mostrar
b2.onclick = b2Mostrar
c2.onclick = c2Mostrar
d2.onclick = d2Mostrar
