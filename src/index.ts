let nombre: string = "Cristian";
nombre = "Buitrago";
console.log(nombre)

let numero: number = 23;
console.log(numero);


type address = {
    city : string;
    country : string;
    ad : string;
}

// Crear ob en typescript

type Estudiante = {
    fistName: string; 
    lastName: string;
    // tipos unión (funciones)
    age?: number | string;
}

const e1 : Estudiante = {
    fistName : "Carlos",
    lastName : "Rodrigez",
    age : 34,
}

const e2 : Estudiante = {
    fistName : "Linda",
    lastName : "Guerrero"
}


// función para mostrar info estudiante 
// versión declarativa

const mostrarEstudiante = 
    (estudiante : Estudiante): string => {
    const { fistName , lastName } = estudiante;
    return `Nombre de estudiante: ${fistName} 
           apellido: ${lastName}`; //comilla acostada = representa string
                                    // Exclusiva de js
                      
}

console.log (mostrarEstudiante(e1));


// ARREGLOS
// Crear un arreglo a estudiantes:

//let = cambiar toso
//const = cambiar algo fijo

let estudiantes: Estudiante[] = []


// recorrer el arreglo de estudiantes
// imprimiendo nombre y apellido 
// utilizando el metodo de arreglo forEach


const agregarEstudiante = (estudiante : Estudiante) => {
    estudiantes.push(estudiante)
}

agregarEstudiante ({
    fistName: "Carlos",
    lastName: "Ortega",
    age: 32
})


console.log(estudiantes);


// Agregar otro estudiante

agregarEstudiante ({
    fistName: "Sofi",
    lastName: "Guerrero", 
    age: 22
})

console.log(estudiantes);


// Agregar otro estudiante

agregarEstudiante ({
    fistName: "Leidy",
    lastName: "Garcia",
    age: 18
})

console.log(estudiantes);



// Metodo para eliminar

/*const eliminarEstudiante = ( indice: number) => {
    estudiantes.splice(indice, 1) //metodo splice
}

eliminarEstudiante(0)

console.log (estudiantes);
*/




// Metodo para eliminar por edad - EVIDENCIA

const eliminarEstudiante = ( age: number) => {
    estudiantes = estudiantes.splice(age, 32) //metodo splice
}

eliminarEstudiante(1)

console.log (estudiantes);
