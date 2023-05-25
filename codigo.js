

function notas(){
    let Nome = window.prompt('Digite Seu Nome')

    let n1 = Number(window.prompt('Digite Sua Primeira Nota:'))
    let n2 = Number(window.prompt('Digite Sua Segunda Nota:'))
    let n3 = Number(window.prompt('Digite Sua Terceira Nota:'))
    
    media = (n1+n2+n3)/3

    if(media >= 6)
    if(media==10)
     alert("Parabéns! Você foi Aprovado");
    else
    document.getElementById('valor').innerHTML = `${Nome}, sua média foi ${+ media}, você foi Aprovado!`;
   else
   document.getElementById('valor').innerHTML = `${Nome} sua média foi ${+ media}, você foi Reprovado!` 


}
