class alumno{
    constructor(nombre, edad, correo, celular, tarea){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.celular = celular;
        this.tarea = tarea;
    }
    
    SolucionDeTarea(a, b){
        if(this.tarea == "Suma"){
            sol = a + b ;
        }
        if(this.tarea == "Resta"){
            sol = a - b ;
        }
        if(this.tarea == "Multiplicación"){
            sol = a*b ;
        }
        if(this.tarea == "División"){
            sol = a/b ;
        }
        return console.log("El resultado de la tarea es: "+ sol + ".")
    }
}

function opc(){
    console.log("BIENVENIDO(A)")
    console.log("1.- Registrar alumno.\n2.- Consultar datos del alumno.\n3.- Solucionar tarea alumno.\n4.-Eliminar alumno.\n5.- Salir del menu.")
    let opc = "";
}

switch (opc) {
    case 1: 
    /*nombre = prompt('Ingrese nombre del alumno','');
    edad = prompt('Ingrese edad del alumno');
    correo = prompt('Ingrese correo del alumno');
    celular = prompt('Ingrese celular del alumno');
    tarea = prompt('Ingrese tarea del alumno');*/
    break;
    case 2:     
        return console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nCorreo: " + this.correo + "\nCelular: " + this.celular + "\nTarea: ")
        break;
    case 3: console.log('alumno...')
    break;
    case 4: console.log('Tarea...')
    break;
    case 5: console.log('Muchas gracias...')
    break;

    default: console.log('Error de opción');
    
}

