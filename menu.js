class alumno{
    constructor(nombre, edad, correo, celular, tarea){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.celular = celular;
        this.tarea = tarea;
    }
    consulta(){
        return console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nCorreo: " + this.correo + "\nCelular: " + this.celular + "\nTarea: ")
    }
    tarea(a, b){
        if(this.tarea == "Suma"){
            sol = a + b ;
        }
        if(this.tarea == "Multiplicación"){
            sol = a*b ;
        }
        return console.log("El resultado es: "+ sol + ".")
    }
}

function opc(){
    console.log("BIENVENIDO(A)")
    let opc = 1;
}

switch (opc) {
    case 1: 
    nombre = prompt('Ingrese nombre del alumno','');
    edad = prompt('Ingrese edad del alumno');
    correo = prompt('Ingrese correo del alumno');
    celular = prompt('Ingrese celular del alumno');
    tarea = prompt('Ingrese tarea del alumno');
    break;
    case 2: console.log('alumno...')
    break;
    default: console.log('Error de opción');
    
}

