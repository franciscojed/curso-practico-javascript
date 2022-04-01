

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





