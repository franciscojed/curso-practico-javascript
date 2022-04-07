const listaEjemplo =
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

function mode(arr)
{
    console.time();
    return arr.sort(
        (a,b) =>
        arr.filter(v => v===a).length - arr.filter(v => v===b).length
        ).pop();
}


console.log(mode(listaEjemplo));
console.timeEnd();