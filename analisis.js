//funcioines helpers o utils
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

/******************************************************************************************* */

//hallar la mediana del array de objetos listaSalarios
//pero primero debemos ordenar el array

function ordenarListaSalarios(listaSalarios)
{
    const salariosPais = listaSalarios.map
    (
        function (elemento)
        {
            return elemento.salario;
        }
    );

    const salariosPaisOrdenados = salariosPais.sort
    (
        function (salarioA, SalarioB)
        {
            return salarioA - SalarioB;
        }
    ); 

    return salariosPaisOrdenados;
}



function medianaSalarios (listaSalarios)
{ 
    let mediana;    
    const salariosPaisOrdenados = ordenarListaSalarios(listaSalarios);
    const mitad = parseInt(salariosPaisOrdenados.length / 2);

    if (esPar(salariosPaisOrdenados.length)) //ES LENGTH   TH AL FINAL!!!!!
    {
        const salarioPersonaMitad1 = salariosPaisOrdenados[mitad - 1];
        const salarioPersonaMitad2 = salariosPaisOrdenados[mitad];       
        mediana = calcularMediaAritmetica([salarioPersonaMitad1, salarioPersonaMitad2]);    
    }
    else
    {
        mediana = salariosPaisOrdenados[mitad]; 
    }    
    console.log("Salarios Ordenados de menor a mayor a continuación")
    console.log(salariosPaisOrdenados);
    console.log("La MEDIANA de los salarios de toda Colombia es: ");
    
    return mediana;

}

// ahora hallaré la media aritmética del top 10% de salarios de Colombia


function mediaAritmeticaSalariosTop10(listaSalarios)
{
    const salariosPaisOrdenados = ordenarListaSalarios(listaSalarios);

    const salariosPaisTop10 = salariosPaisOrdenados.splice(top10Indice);

    const porcentajeExcluido = 0.90;
    const top10Indice = parseInt(salariosPaisOrdenados.length * porcentajeExcluido);

    
    console.log("El 10% de salarios más altos de Colombiaa continuación");
    console.log(salariosPaisTop10);

    const mediaAritmeticaTop10 = calcularMediaAritmetica(salariosPaisTop10);

    return `La media aritmética del top ${Math.ceil((1-porcentajeExcluido)*100)}% es ${mediaAritmeticaTop10}`;

    //OJO VER BIEN QUE HACE EL METODO SPLICE SEGUN EXPLICA EL PROFE JUAN 
    //PORQUE ME FUNCIONA PERO NO LO ENTIENDO MUY BIEN QUE DIGAMOS
}



function pruebaSlice()
{    
    const arrayEjemplo = [0,1,2,3,4,"Francisco 5","Sandra 6",7,8,9,10];
    const spliceEjemplo = arrayEjemplo.splice(5,2);

    console.log
    (
        {arrayEjemplo},
        {spliceEjemplo}

    );
}









