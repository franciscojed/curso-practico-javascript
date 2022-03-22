function alturaIsosceles(lado1, lado2, lado3)
{
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {   //que los argumentos no sean negativos      
        if ((lado1 === lado2) && (lado2 === lado3)) { //equilatero todos los lados iguales
            const basePartida = lado3 / 2;
            const altura = Math.sqrt(lado1**2 - basePartida**2); // todos los lados iguales no hay riesgo de raiz negativa
            return("La altura del equilatero es " + altura + "cms");       
        } else if (lado1 === lado2) {            
            const basePartida = lado3 / 2;
            let resultadoSinRaiz = lado1**2 - basePartida**2;
            /* se pasa el resultado parcial por la función absoluta. El valor absoluto
             es pasar un valor negativo a positivo y si está positivo lo deja igual */
            resultadoSinRaiz = Math.abs(resultadoSinRaiz); 
            const altura = Math.sqrt(resultadoSinRaiz);
            return "La altura del isosceles es " + altura + "cms";
        } else if (lado2 === lado3) {           
            const basePartida = lado1 / 2;
            let resultadoSinRaiz = lado2**2 - basePartida**2;
            resultadoSinRaiz = Math.abs(resultadoSinRaiz); 
            const altura = Math.sqrt(resultadoSinRaiz);
            return "La altura del isosceles es " + altura + "cms";
        } else if (lado1 === lado3) {            
            const basePartida = lado2 / 2;
            let resultadoSinRaiz = lado1**2 - basePartida**2;
            resultadoSinRaiz = Math.abs(resultadoSinRaiz);
            const altura = Math.sqrt(resultadoSinRaiz);
            return "La altura del isosceles es " + altura + "cms";
        } else {
            return "Todos los lados son diferentes, ni es equilatero ni es isosceles";
        }
    } else {
        return "Todos los lados deben ser mayores de cero";
    }
}