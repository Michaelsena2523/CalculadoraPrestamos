

const montoCapital = document.getElementById("monto"); 
const meses = document.getElementById("meses"); 
const insteres = document.getElementById("Interes"); 
const btn = document.getElementById("btn"); 
const resultado = document.getElementById("contenedor"); 
const text = document.getElementById("cuota"); 


btn.addEventListener("click" , calculadoraPrestamos);


function calculadoraPrestamos(){
    let cap = montoCapital.value;
    let int = insteres.value;
    let me = meses.value
    let total = 0;
    let suma = 0;

   total = cap * int; 
   total = + cap + total;
   suma = total / me;  
    

    text.textContent = "Sus prestamos a Pagar "
    resultado.innerHTML = suma.toFixed(2)
    resultado.style.height = "200px";
    resultado.style.width= "70%";
  
}



