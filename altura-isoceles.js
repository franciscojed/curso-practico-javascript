function alturaIsosceles(lado1, lado2, lado3)
{
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {        
        if ((lado1 === lado2) && (lado2 === lado3)) {
            const basePartida = lado3 / 2;
            const altura = Math.sqrt(lado1**2 - basePartida**2);
            return("La altura del equilatero es " + altura + "cms");       
        } else if (lado1 === lado2) {            
            const basePartida = lado3 / 2;
            const altura = Math.sqrt(lado1**2 - basePartida**2);
            return "La altura del isosceles es " + altura + "cms";
        } else if (lado2 === lado3) {           
            const basePartida = lado1 / 2;
            const altura = Math.sqrt(lado2**2 - basePartida**2);
            return "La altura del isosceles es " + altura + "cms";
        } else if (lado1 === lado3) {            
            const basePartida = lado2 / 2;
            const altura = Math.sqrt(lado1**2 - basePartida**2);
            return "La altura del isosceles es " + altura + "cms";
        } else {
            return "Todos los lados son diferentes, ni es equilatero ni es isosceles";
        }
    } else {
        return "Todos los lados deben ser mayores de cero";
    }
}