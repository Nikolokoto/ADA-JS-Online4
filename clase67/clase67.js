// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

const obtenerNumeroMenor = (numbers) => {
    let minor;
    for (let i=0; i < numbers.length; i++) {
        if (numbers [i] < numbers [i+1]) {
            minor = numbers[i];
        } else if (numbers[i] > numbers [i+1]){
            minor = numbers[i+1];
        }
    }
    console.log(minor);
    return minor
}

obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]); // 2