const notasFrancisco = 
[
    {
        materia: "Programación",
        nota: 9.9,
        peso: 5
    },
    {
        materia: "Matemáticas",
        nota: 8.8,
        peso: 4
    },
    {
        materia: "Inglés",
        nota: 9.5,
        peso: 4
    },
    {
        materia: "Oratoria",
        nota: 10,
        peso: 3
    }
];

function mediaPonderada (notasAlumno)
{
    
    
    let arrayNotas = notasAlumno.map
    (
        function(elemento)
        {
            return elemento.nota * elemento.peso; 
        }
    ); 
    
    const sumaNotasXPeso = arrayNotas.reduce
    (
        function(sum=0, nuevoElemento)
        {
            return sum + nuevoElemento;
        }
    );

    
    let arrayPesos = notasAlumno.map
    (
        function(elemento)
        {
            return elemento.peso;
        }
    );

    const sumaPesos = arrayPesos.reduce
    (
        function(sum=0, nuevoElemento)
        {
            return sum + nuevoElemento
        }
    );
    
    return sumaNotasXPeso / sumaPesos;

}





