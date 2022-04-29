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



function calcularMedianaSalarios (listaSalarios)
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
    
    const porcentajeExcluido = 0.90;
    
    const salariosPaisOrdenados = ordenarListaSalarios(listaSalarios);

    const top10Indice = parseInt(salariosPaisOrdenados.length * porcentajeExcluido);

    const salariosPaisTop10 = salariosPaisOrdenados.splice(top10Indice);

    console.log("El 10% de salarios más altos de Colombiaa continuación");
    console.log(salariosPaisTop10);

    const mediaAritmeticaTop10 = calcularMediaAritmetica(salariosPaisTop10);

    return `La media aritmética del top ${Math.ceil((1-porcentajeExcluido)*100)}% es ${mediaAritmeticaTop10}`;
   
}

// ahora hallaré la mediana del top 10% de salarios de Colombia

function calcularMedianaSalariosTop10(listaSalarios)
{
    const listaOrdenada = ordenarListaSalarios(listaSalarios);
    const spliceStart = parseInt(listaOrdenada.length * 0.90);
    const splicePositions = listaOrdenada.length - spliceStart;

    const SalariosTop10 = listaOrdenada.splice(spliceStart, splicePositions);
    console.log("El top 10 de salarios en el país son");
    console.log({SalariosTop10});

    const PosicionMitad = parseInt(SalariosTop10.length / 2);

    if (esPar(SalariosTop10.length))
    {
        const indexMitad1 = PosicionMitad - 1;
        const indexMitad2 = PosicionMitad;     
        const salariosMitad1 = SalariosTop10[indexMitad1];
        const salariosMitad2 = SalariosTop10[indexMitad2]; 
        const mediana = calcularMediaAritmetica([salariosMitad1, salariosMitad2]);
        return mediana;

    }
    else
    {     
        const mediana = SalariosTop10[PosicionMitad];           
        return mediana;
    }
}

//afecta al array original
function pruebaEmpamar()
{    
    const arrayEjemplo = [0,1,2,3,4,"Francisco 5","Sandra 6",7,8,9,10];
    const spliceEjemplo = arrayEjemplo.splice(5,3);

    console.log
    (
        {
            arrayEjemplo,
            spliceEjemplo
        }
    );
}

//no afecta al array original
function pruebaRebanada()
{    
    const arrayEjemplo = [0,1,2,3,4,"Francisco 5","Sandra 6",7,8,9,10];
    const sliceEjemplo = arrayEjemplo.slice(5,7);

    console.log
    (
        {arrayEjemplo},
        {sliceEjemplo}

    );
}

//  slice no afecta al array original

function pruebaRebanada2()
{
    const array = [0,1,2,3,4,5,6,7,8,9];
    const arraySlice = array.slice(3, 7);
    console.log("Array original " + array);
    console.log("Array slice " + arraySlice);

}

    







