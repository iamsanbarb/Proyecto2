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
    let opc = 1;
}

switch (opc) {
    case 1: 
    var n1=0;
    var n2=2;
    var r=0;
    n1=prompt("Dame el primer valor");
    n2=prompt("Dame el segundo valor");
    r=n1+n2;

    /*nombre = prompt('Ingrese nombre del alumno','');
    edad = prompt('Ingrese edad del alumno');
    correo = prompt('Ingrese correo del alumno');
    celular = prompt('Ingrese celular del alumno');
    tarea = prompt('Ingrese tarea del alumno');*/
    break;
    case 2: console.log('alumno...')
    break;
    case 3: console.log('alumno...')
    break;
    default: console.log('Error de opción');
    
}

