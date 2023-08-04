/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = [];
 for (var i= 0 ; i < array.length; i++) {
    masUno.push(array[i] + 1)
   } return masUno;

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.push(elemento);
    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento); 
    return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");  
}
//var frase = "";
//for (var i= 0 ; i < palabras.length; i++) {
//  if(frase === "") {
// frase = palabras[i]  } else {
//  frase = frase + " " + palabras[i] }
//} return frase 
//}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
 } 
 //otra forma
// if (array.includes(elemento)){
 //  return true; } else {
 //  return false;  }

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var masNumeros = 0;
 for (var i= 0 ; i < arrayOfNums.length; i++) {
    masNumeros += arrayOfNums[i]
   } return masNumeros;
}
//Otra forma de arrayOfNums
//var masNumeros = 0;
//arrayOfNums.foreach((elem) => {masNumeros += elem; })
//  return masNumeros; }

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var notas = 0;
   for (var i = 0; i < resultadosTest.length; i++) {
  notas = notas + resultadosTest[i];
}  
    return notas / resultadosTest.length;
}
//Otra Forma
//var notas = 0;
//resultadosTest.forEach(element => {
//   notas+=element});
//  return notas/resultadosTest.length; 

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masGrande = 0;
   for (var i = 0 ; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > masGrande){
         masGrande =arrayOfNums[i];
      }
   } return masGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var resultado = 1
   if (arguments.length === 0){
      return 0;
   }else if (arguments.length === 1)
   { return arguments [0];
   }else {
      for (var i= 0 ; i < arguments.length; i++) {
         resultado = resultado * arguments[i]; //resultado*=arguments[i];
      }
      return resultado;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var numeros= 0;
  for ( var i= 0; i < array.length; i++) {
   if (array[i] > 18) {
      numeros++ //numeros + 1
   }
  }return numeros;
}
//otra forma 
// let cantidad = array.filter(element => element > 18);
//return cantidad.length; }

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
  if (numeroDeDia > 1 && numeroDeDia < 7) {
   return "Es dia laboral";
  } else {
   return "Es fin de semana";
  } 
}
//  return (numeroDeDia > 1 && numeroDeDia) < 7 ? "Es dia laboral" : "Es fin de semana";

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   num = num.toString();
   if(num.charAt(0) === "9") {
      return true;
   } else {
      return false;}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   for ( var i= 1; i < array.length; i++) {
      if (array[i] === array[0]) 
return true;} {
   return false;
}
}
// otra forma
// return new Set(array).size!== array.length
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesPedidos=[];
  for (var i = 0; i < array.length; i++) {
   if (array[i]==="Enero"|| array[i]==="Marzo" || array[i]==="Noviembre") {
      mesesPedidos.push(array[i])}
} 
if (mesesPedidos.length === 3) {
   return mesesPedidos
}else { return "No se encontraron los meses pedidos"}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array= [];
  for ( var i= 0; i <=10 ; i ++) {
   array.push(i * 6)
  } return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevosNum = [];
   for (var i= 0 ; i < array.length ; i++) {
      if (array[i] > 100) {
         nuevosNum.push(array[i])
      }
   } return nuevosNum;
}
//otra forma
//return array.filter(element => element > 100); }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numMasDos= [];
   var numMasDos2= false;
   for (var i= 0 ; i < 10; i ++) {
      num = num + 2 
         numMasDos.push(num);
         if (num === i) {
            numMasDos2= true;
            break;
         }
   } if (numMasDos2){ return "Se interrumpió la ejecución"}
    return numMasDos;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var numMasDos= [];
   
   for (var i= 0 ; i < 10; i ++) {
      
         if (i === 5) {
         continue;
         }
         num = num + 2 
         numMasDos.push(num);
} return numMasDos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
