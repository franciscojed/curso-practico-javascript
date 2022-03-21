
/*
function perimetroCuadrado(lado)
{
    return lado * 4;
}
*/

/* Función flecha o arrow function, la puse para aprender */
const perimetroCuadrado = (lado) => lado * 4; 


function areaCuadrado(lado)
{
    return lado * lado;
} 


function perimetroTriangulo(lado1, lado2, base) 
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) 
{
    return (base * altura) / 2; 
}


const PI = Math.PI;

function diametroCirculo(radio)
{
    return radio * radio;
}

function perimetroCirculo(radio) 
{
    const diametro = diametroCirculo(radio); 
    return PI * diametro;
}  

function areaCirculo(radio) 
{
    return PI * radio * radio; 
}


function calcularPerimetroCuadrado() 
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es ${perimetro} cms`);
}


function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El área del cuadrado es ${area} cms^2`);
}


function calcularPerimetroTriangulo() 
{
    let input = document.getElementById("InputTrianguloLado1"); // let para poder reutilizar la variable
    const lado1 = Number(input.value);
    
    input = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input.value);

    input = document.getElementById("InputTrianguloBase");
    const base = Number(input.value);    
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`El perimetro del triangulo es ${perimetro} cms`);
}


function calcularAreaTriangulo() 
{
    let input = document.getElementById("InputTrianguloBaseArea");
    const base = Number(input.value);
    
    input = document.getElementById("InputTrianguloAltura");
    const altura = Number(input.value);
    
    const area = areaTriangulo(base, altura);
    alert(`El área del triangulo es ${area} cms^2`);
}


function calcularPerimetroCirculo() 
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(`El perimetro del circulo es ${perimetro} cms`);
}


function calcularAreaCirculo() 
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(`El area del circulo es ${area} cms^2`);
}

