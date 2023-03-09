const contador = document.getElementById("contar");
const sumar = document.getElementById("aum");
const restar = document.getElementById("dis");
const reset = document.getElementById("res");

let numero = 0;

sumar.addEventListener("click", () => {
    numero += 1;
    contador.innerHTML = numero;
});

restar.addEventListener("click", () => {
    
    if(numero==0){
        alert("No puedes restar nada")
    }
    else{
        numero -= 1;
        contador.innerHTML = numero;
        
    }
});

reset.addEventListener("click", () => {
    numero = 0;
    contador.innerHTML = numero;
});


