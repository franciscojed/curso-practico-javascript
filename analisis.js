//helpers
function esPar(num)
{
    return num % 2 === 0;   

}

function calcularMediaAritmetica(array)
{
    const sumarArray = array.reduce(
        function (valorAcumulado, nuevoElemento)
        {
            valorAcumulado = valorAcumulado + nuevoElemento;
            return valorAcumulado;
        }        
    );
    
    const mediaArray = sumarArray / array.length;
    return mediaArray;    
}


//hallar la mediana del array de objetos salariosColombia
//pero primero debemos ordenar el array

const salariosCol = salariosColombia.map
(
    function (elemento)
    {
        return elemento.salario;
    }

);

const salariosColOrdenados = salariosCol.sort
(
    function (salarioA, SalarioB)
    {
        return salarioA - SalarioB;
    }
); 

let mediana;

const mitad = parseInt(salariosColOrdenados.length / 2);


if (esPar(salariosColOrdenados.length)) //ES LENGTH   TH AL FINAL!!!!!
{
    const mitad1 = mitad - 1;
    const mitad2 = mitad;
    const arrayDosMitades = [ salariosColOrdenados[mitad1], salariosColOrdenados[mitad2] ];
    console.log(arrayDosMitades);
    mediana = calcularMediaAritmetica(arrayDosMitades);    
}

else
{
    mediana = salariosColOrdenados[mitad]; 
}

console.log("Salarios Ordenados de menor a mayor a continuación")
console.log(salariosColOrdenados);
console.log("La MEDIANA de los salarios de toda Colombia es " + mediana);

// ahora hallaré la media aritmética del top 10% de salarios de Colombia
const porcentajeExcluido = 0.90;
const top10Indice = parseInt(salariosColOrdenados.length * porcentajeExcluido);

const salariosColTop10 = salariosColOrdenados.splice(top10Indice, salariosColOrdenados.length - 1);
console.log("El 10% de salarios más altos de Colombiaa continuación");
console.log(salariosColTop10);

const mediaAritmeticaTop10 = calcularMediaAritmetica(salariosColTop10);
console.log(`La media aritmética del top ${Math.ceil((1-porcentajeExcluido)*100)}
% es ${mediaAritmeticaTop10}`);

//OJO VER BIEN QUE HACE EL METODO SPLICE SEGUN EXPLICA EL PROFE JUAN 
//PORQUE ME FUNCIONA PERO NO LO ENTIENDO A MUY BIEN QUE DIGAMOS






