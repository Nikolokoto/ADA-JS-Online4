/**1
 * // Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, 
 * y devuelva true si la persona está habilitada para ver la película o false si no. 
 * Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
 */

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    let verPelicula = (edad >= 15 || tieneAutorizacion) ? true : false;
    return verPelicula
}

console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true)); 
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));

/**2
 * Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, 
 * y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no 
 * (si el valor es igual a uno de los extremos se considera que está dentro del rango)
 */

const estaEnRango = (valor, numMin, numMax) => {
    let estaEnRango = (valor >= numMin && valor <= numMax) ? true : false;
    return estaEnRango
}
console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false

/**3
 * Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo 
 * y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: 
 * Error: color de semáforo inválido
 */

const puedeAvanzar = (color) => {
    switch(color) {
        case 'verde':
            return true
        case 'amarillo':
            return false
        case 'rojo':
            return false
        default:
            "Error: color de semáforo inválido"
    }
}

console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'

/**4
 * Crear una función esVocal que tome como argumento un string letra y 
 * devuelva true si letra es una vocal o false si no lo es.
 */

const esVocal = (str) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(str)
}

console.log(esConsonante('a')); // true
console.log(esConsonante('n')); // false
console.log(esConsonante('i')); // true
console.log(esConsonante('e')); // true
console.log(esConsonante('r')); // false

/**5
 * Crear una función esConsonante que tome como argumento un string letra y
 * devuelva true si letra es una consonante o false si no lo es
 */

// const esConsonante = !esVocal(str);

// console.log(esConsonante('a')); // false
// console.log(esConsonante('n')); // true
// console.log(esConsonante('i')); // false
// console.log(esConsonante('e')); // false
// console.log(esConsonante('r')); // true

/**b1
 * Crear un programa que simule un Tamagochi (mascota virtual).
 * Debe tener 4 variables: salud, felicidad, limpieza, energía, 
 * cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje 
 * con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). 
 * Luego, debe mostrar las siguientes posibles acciones a realizar, 
 * que modifican los valores de la siguiente forma:
 * ALIMENTAR: +3 energía, +2 felicidad
 * JUGAR: +2 felicidad, -2 energía, -1 limpieza
 * DORMIR: +5 energía, +2 salud, -2 limpieza
 * VACUNAR: +5 salud, -6 felicidad
 * BAÑAR: +3 salud
 * RETAR: -3 felicidad
 * ACARICIAR: +4 felicidad
 * Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
 */

const asignacionInicial = (min, max, _var) => {
    const num = Math.random(_var) * (max - min) + min;
    return parseInt(num);
}

function tamagochi(nameInput) {

        let _salud, _felicidad, _limpieza, _energia;

        let salud = asignacionInicial(1, 10, _salud);
        let felicidad = asignacionInicial(1, 10, _felicidad);
        let limpieza = asignacionInicial(1, 10, _limpieza);
        let energia = asignacionInicial(1, 10, _energia);

        this.name = nameInput;
        this.salud = salud;
        this.felicidad = felicidad;
        this.limpieza = limpieza;
        this.energia = energia;
        
        this.statusTamagochi = () => {
            alert(`${this.name}, tu mascota, tiene:
            Salud: ${this.salud},
            Felicidad: ${this.felicidad},
            Limpieza: ${this.limpieza},
            EnergIa: ${this.energia}.
        Cuídala! Puedes: alimentarla (${this.name}.alimentar), jugar con ella (${this.name}.jugar), vacunarla (${this.name}.vacunar), bañarla (${this.name}.bañar), retarla (${this.name}.retar) o acariciarla (${this.name}.acariciar).`)
        }

        this.statusTamagochi();

        this.alimentar = () => {
            this.energia += 3;
            this.felicidad += 2;
            this.statusTamagochi();
        }

        this.jugar = () => {
            this.felicidad += 2;
            this.energia -= 2;
            this.limpieza -= 1;
            this.statusTamagochi();
        }

        this.vacunar = () => {
            this.salud += 5;
            this.felicidad -= 6;
            this.statusTamagochi();
        }

        this.bañar = () => {
            this.salud += 3;
            this.statusTamagochi();
        }

        this.retar = () => {
            this.felicidad -= 3;
            this.statusTamagochi();
        }

        this.acariciar = () => {
            this.felicidad += 4;
            this.statusTamagochi();
        }
}

const misha = new tamagochi('Misha');

