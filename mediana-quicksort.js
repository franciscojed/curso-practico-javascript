function quickSort(array)
{
    if(array.length < 1)
    {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = array[0];

    for(let i=1; i<array.length; i++)
    {
        if (array[i] < pivot)
        {
            left.push(array[i]);
            
        }
        else
        {
            right.push(array[i]);
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
}



function calcularMediaAritmetica(lista)
{
    const sumarLista = lista.reduce(
        function (valorAcumulado, nuevoElemento)
        {
            valorAcumulado = valorAcumulado + nuevoElemento;
            return valorAcumulado;
        }        
    );
    
    const promedioLista = sumarLista / lista.length;
    return promedioLista;    
}


const listaPar = [
    5,
    4,
    3,
    2,
    1000000000,
    2
];


/*
2
2
3
4
5
10000000
*/


const listaImpar = [
    10,
    40,
    2000000000,
    5,
    10,
    3,
    6,
];

/*
3
5
6
10
10
40
200000000

*/


function esPar(numeroElementosLista) 
{
    if(numeroElementosLista%2 === 0)
    {
        return true;
    } 
    else
    {
        return false;    
    }
}


function calcularMediana(listaDesordenada) 
{
    const listaOrdenada = quickSort(listaDesordenada);
    
    console.log(listaOrdenada);    

    const numeroElementosLista = listaOrdenada.length;
    let mitadLista = parseInt(numeroElementosLista / 2);
    let mediana;

    if (esPar(numeroElementosLista))
    {
        const elementoMitad1 = listaOrdenada[mitadLista - 1];
        const elementoMitad2 = listaOrdenada[mitadLista];

        mediana = calcularMediaAritmetica([elementoMitad1, elementoMitad2]);
        
    }
    else
    {
        mediana = listaOrdenada[mitadLista]; 
        
    }
    return mediana;
}

