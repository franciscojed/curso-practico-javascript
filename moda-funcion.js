const frutas =
[
    "peras",
    "manzanas",
    "uvas",
    "bananos",
    "papayas",
    "uvas",
    "naranjas",
    "bananos",
    "manzanas",
    "naranjas",
    "melones",
    "bananos",
    "sandias",
    "uvas",
    "ciruelas",
    "ciruelas",
    "mangos",
    "mangos",
    "mangos",
    "guanabanas",
    "piñas",
    "sandias",
    "melones",
    "bananos",
    "bananos",
    "fresas",
    "fresas",
    "bananos",
    "bananos",
    "bananos",
];


function deListaAObjeto(lista)
{
    const elementosUnicos = {};

    lista.map
    (
        function (elemento)
        {
            if (elementosUnicos[elemento])
            {
                elementosUnicos[elemento] += 1;
            }
            else
            {
                elementosUnicos[elemento] = 1;
            }
        }
    );
    return elementosUnicos;
}

function deObjClasificadoAArray(elementosUnicos)
{
    const arrayElementosOrdenados =
        Object.entries(elementosUnicos).sort
        (
            (a,b) => b[1]-a[1] //la resta para orden descendente
        ); 
    return arrayElementosOrdenados;
}


function moda(lista) //FUNCIÓN A INVOCAR
{ 
    const elementosUnicos = deListaAObjeto(lista);
    const arrayElementosOrdenados = deObjClasificadoAArray(elementosUnicos);
    const moda = arrayElementosOrdenados[0];
    return moda;    
} 