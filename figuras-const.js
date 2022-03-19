console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El lado del cuadrado mide " + ladoCuadrado + "cm");
console.log("El perímetro del cuadrado mide "+ perimetroCuadrado + "cm");
console.log("El área del cuadrado mide "+ areaCuadrado + "cm^2");

console.groupEnd();


console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El lado izquierdo del tringulo mide " + ladoTriangulo1 + "cm");
console.log("El lado derecho del tringulo mide " + ladoTriangulo2 + "cm");
console.log("La base del tringulo mide " + baseTriangulo + "cm");
console.log("El perímetro del triangulo mide "+ perimetroTriangulo + "cm");
console.log("El área del triangulo mide "+ areaTriangulo + "cm^2");

console.groupEnd();


console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = PI * diametroCirculo;
const areaCirculo = PI * radioCirculo * radioCirculo;
console.log(
    "El radio del circulo mide "
    + radioCirculo 
    +"cm, El diametro del circulo mide "
    + diametroCirculo
    + "cm  y PI es "
    + PI);    
console.log("El perímetro del circulo mide "+ perimetroCirculo + "cm");
console.log("El área del circulo mide "+ areaCirculo + "cm^2");

console.groupEnd();

