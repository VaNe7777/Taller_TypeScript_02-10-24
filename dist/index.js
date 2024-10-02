"use strict";
let nombre = "Cristian";
nombre = "Buitrago";
console.log(nombre);
let numero = 23;
console.log(numero);
const e1 = {
    fistName: "Carlos",
    lastName: "Rodrigez",
    age: 34,
};
const e2 = {
    fistName: "Linda",
    lastName: "Guerrero"
};
// función para mostrar info estudiante 
// versión declarativa
const mostrarEstudiante = (estudiante) => {
    const { fistName, lastName } = estudiante;
    return `Nombre de estudiante: ${fistName} 
           apellido: ${lastName}`; //comilla acostada = representa string
    // Exclusiva de js
};
console.log(mostrarEstudiante(e1));
// ARREGLOS
// Crear un arreglo a estudiantes:
//let = cambiar toso
//const = cambiar algo fijo
let estudiantes = [];
// recorrer el arreglo de estudiantes
// imprimiendo nombre y apellido 
// utilizando el metodo de arreglo forEach
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
agregarEstudiante({
    fistName: "Carlos",
    lastName: "Ortega",
    age: 32
});
console.log(estudiantes);
// Agregar otro estudiante
agregarEstudiante({
    fistName: "Sofi",
    lastName: "Guerrero",
    age: 22
});
console.log(estudiantes);
// Agregar otro estudiante
agregarEstudiante({
    fistName: "Leidy",
    lastName: "Garcia",
    age: 18
});
console.log(estudiantes);
// Metodo para eliminar
/*const eliminarEstudiante = ( indice: number) => {
    estudiantes.splice(indice, 1) //metodo splice
}

eliminarEstudiante(0)

console.log (estudiantes);
*/
// Metodo para eliminar por edad - EVIDENCIA
const eliminarEstudiante = (age) => {
    estudiantes = estudiantes.splice(age, 32); //metodo splice
};
eliminarEstudiante(1);
console.log(estudiantes);
