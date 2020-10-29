/**
 * Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje 
 * y devuelva el valor del porcentaje correspondiente al número
 */

const calcularPorcentaje = (num, porc) => {
    let resultado = num * (porc / 100)
    return resultado
}

let mostrar = calcularPorcentaje(100, 15);
console.log(mostrar);

/**
 * Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje 
 * y devuelva la resta de dicho número con la de su porcentaje. Usar la función 
 * calcularPorcentaje para obtener el porcentaje a restar
 */

const restarPorcentaje = (num, porc) => {
    let paraRestar = calcularPorcentaje(num, porc);
    let restar = num - paraRestar;
    return restar;
}

mostrar = restarPorcentaje(100, 15);
console.log(mostrar);


/**
 * Crear una función contarPalabras que tome como argumento un string str 
 * y devuelva el mismo string con todas las vocales reemplazadas por la letra i
 */

const burlarse = (str) => {
    const otrasVocales = ['a', 'e', 'o', 'u']
    for (let i = 0; str.length > i; i++) {
        if (otrasVocales.includes(str[i])) {
            str = str.replace(str[i], 'i');
        }
    }
    return str
}

mostrar = burlarse('programar es facil');
console.log(mostrar);