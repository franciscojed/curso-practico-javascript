console.group("Cuadrado");

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
} 

console.groupEnd();


console.group("Triangulo");

const alturaTriangulo = 5.5;


function perimetroTriangulo(lado1, lado2, base) 
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) 
{
    return (base * altura) / 2; 
}

console.groupEnd();


console.group("Circulo");

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

console.groupEnd();

