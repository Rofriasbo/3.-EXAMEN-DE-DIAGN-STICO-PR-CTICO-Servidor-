// 1. Conteo de caracteres
function contarCaracteres(cadena) {
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '');
    const conteo = cadenaLimpia.length;
    console.log(`Original: "${cadena}", Limpiar: "${cadenaLimpia}", Conteo: ${conteo}`);
    return conteo;
}
console.log(contarCaracteres("Finlandia!")); // Output: 9

// 2. Reversión de cadena
function revertirFrase(frase) {
    const palabrasOriginales = frase.split(" ");
    const palabrasInvertidas = palabrasOriginales.map(palabra => palabra.split("").reverse().join(""));
    const fraseRevertida = palabrasInvertidas.reverse().join(" ");
    console.log(`Original: "${frase}", Palabras invertidas: ${palabrasInvertidas.join(" ")}, Revertido: "${fraseRevertida}"`);
    return fraseRevertida;
}
console.log(revertirFrase("Donde esta la gotera señora")); // Salida: "aroñes ategot al adnerD"

// 3. Palíndromo
function esPalindromo(palabra) {
    const palabraLimpia = palabra.toLowerCase().replace(/[^a-z]/g, '');
    const palabraRevertida = palabraLimpia.split("").reverse().join("");
    const resultado = palabraLimpia === palabraRevertida;
    console.log(`Original: "${palabra}", Palabra limpia: "${palabraLimpia}", Revertida: "${palabraRevertida}", Es palíndromo: ${resultado}`);
    return resultado;
}
console.log(esPalindromo("A man, a plan, a canal, Panama")); // Salida: true
console.log(esPalindromo("palindromo")); // Salida: false

// 4. Ordenamiento de un arreglo
function ordenarArreglo(arr) {
    const arrAscendente = arr.slice().sort((a, b) => a - b);
    const arrDescendente = arr.slice().sort((a, b) => b - a);
    console.log(`Original: [${arr}], Ascendente: [${arrAscendente}], Descendente: [${arrDescendente}]`);
    return {
        ascendente: arrAscendente,
        descendente: arrDescendente
    };
}
console.log(ordenarArreglo([5, 2, 9, 1, 5, 6])); 

// 5. Suma de elementos de un arreglo
function sumarElementos(arr) {
    const suma = arr.reduce((a, b) => a + b, 0);
    const promedio = suma / arr.length;
    console.log(`Original: [${arr}], Suma: ${suma}, Promedio: ${promedio}`);
    return { suma, promedio };
}
console.log(sumarElementos([8, 2, 6, 4, 5])); // Salida: { suma: 25, promedio: 5 }

// 6. Filtrado de elementos en un arreglo
function filtrarMayoresQue(arr, valor) {
    const filtrado = arr.filter(num => num > valor);
    console.log(`Original: [${arr}], Valor de comparación: ${valor}, Filtrado: [${filtrado}], Cantidad: ${filtrado.length}`);
    return {
        filtrado,
        cantidad: filtrado.length
    };
}
console.log(filtrarMayoresQue([2, 6, 8, 3, 9, 7], 4)); // Salida: { filtrado: [ 6, 8, 9, 7 ], cantidad: 4 }

// 7. Concatenación de arreglos
function concatenarArreglos(arr1, arr2) {
    const concatenado = [...new Set(arr1.concat(arr2))];
    console.log(`Arreglo 1: [${arr1}], Arreglo 2: [${arr2}], Concatenado sin duplicados: [${concatenado}]`);
    return concatenado;
}
console.log(concatenarArreglos(["Hola", "Mundo"], ["Esto", "es", "Hola", "JavaScript"])); 
// Salida: ["Hola", "Mundo", "Esto", "es", "JavaScript"]

// 8. Búsqueda de elementos en un arreglo
function buscarElemento(arr, nombre) {
    const index = arr.indexOf(nombre);
    const mensaje = index !== -1 
        ? `${nombre} está en el arreglo en la posición ${index}.` 
        : `${nombre} no está en el arreglo.`;
    console.log(`Arreglo: [${arr}], Elemento a buscar: "${nombre}", Resultado: ${mensaje}`);
    return mensaje;
}
console.log(buscarElemento(["Ana", "Juan", "Carlos", "Thorfin"], "Thorfin")); // salida: "Thorfin está en el arreglo en la posición 3."
console.log(buscarElemento(["Ana", "Juan", "Carlos", "Thorfin"], "Pedro")); // Salida: "Pedro no está en el arreglo."
