const compraMensual = 30000;
let descuentochica=0.8;
let descuentomediana=0.85;
let descuentogrande=0.9;
let descuentogigante=0.95;


const categoria = document.getElementById ('tamano');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const sinDescuento = document.getElementById('sinDescuento');
const botonComprar = document.getElementById('btnComprar');

function calcularPago(){

let total = cantidad.value * compraMensual;

switch (categoria.value) {
    
case "chica":
    total = total *descuentochica;
break;

case "mediana":
    total=total*descuentomediana;
break;

case "grande":
    total=total*descuentogrande;
break;

case "gigante":
    total=total*descuentogigante;
break;

default:
    break;
}

totalPagar.textContent = `Total a pagar: $ ${total}`;
sinDescuento.textContent = `VALOR COMPRA SIN DESCUENTO: $ ${cantidad.value*compraMensual}`;
}


botonComprar.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});

cantidad.addEventListener('change',(e)=>{
    e.preventDefault()
    calcularPago()
});

categoria.addEventListener('change',(e)=>{
    e.preventDefault()
    calcularPago()
});

