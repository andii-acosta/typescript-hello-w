console.log('inicio script ...')


//sintax

var nombre = "Andres" //javascript
console.log(nombre);
let nombre_cliente = "carlos"// typescript
console.log(nombre_cliente);
//nombre_cliente = 5 //tipado fuerte
console.log( typeof nombre_cliente);

let edad: number = 29
console.log( typeof edad);
console.log( edad);

let mayor_edad : boolean = true

console.log( typeof mayor_edad);
console.log( mayor_edad);

//constantes
const genero = "masculino"
const adulto = 18

//controles de flujo

if(mayor_edad && nombre_cliente.trim().length > 3 ){
    console.log("Usuario valido ...")
}

//funciones
function validar_edad(edad : number, estado : Boolean): boolean{
    if(estado){
        if(edad >= adulto){
            return true
        }else{
            return false
        }
    }
    return false
}
console.log(validar_edad(edad,true))

//Array
let canales: Array<String> = ["app","web","api"]
console.log(canales)

//set
let ciudades: Set<String> = new Set(["Neiva","Cali","Bogota"])
console.log(ciudades)

let horarios: Map<String,Number> = new Map([["Domingo",0],["Sabado",4],["Lunes",8]])
console.log(horarios)
