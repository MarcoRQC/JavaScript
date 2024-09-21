let numeros = [15,80,650,30,-10];

document.write('elementos: ',numeros);
document.write('<br>');
document.write('primer elemento:', numeros[0]);
document.write('<br>');
numeros[0] = 14;
document.write('elementos: ',numeros);
document.write('<br>-------------------');
document.write('<br>');

let frutas= ['manzanas','peras','naranjas','mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');
//METODOS DE LOS ARRASYS

//ver cantidad de elementos
document.write('cantidad: ',numeros.length); 
document.write('<br>');
document.write('cantidad: ',frutas.length);
document.write('<br>');

//saber ultimo elemento
document.write('ultimo elemento: ',numeros[numeros.length-1]);
document.write('<br>');

//arrays en tipo texto
document.write('En string: ',numeros.toString());
document.write('<br>');

//unir tipos de arrays
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanumerico: ', letras.concat(numeros2));
document.write('<br>');

//borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar elemento al final
numeros.push(-10);
document.write(numeros);
document.write('<br>');

//agregar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');


//insertar elemento al inicio
numeros.unshift(140);
document.write(numeros);
document.write('<br>');

//eliminar elementos a partir de un punto
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');

//como copiar un array
let cantidades = [1,2,3,4,5,6,7,8,9,10];
let copia = cantidades.slice(3,6);
document.write('Array copia:', copia);
document.write('<br>');

//organizar arrays en modo alfabetico
let objetos = ['carro','botella','planeta','computadora','zorro'];
document.write(objetos.sort());
document.write('<br>');

//organizar arrays en modo reversa
document.write(objetos.reverse());
document.write('<br>');

//crear array con valores inalterables
const autos = ['Toyota','Chevrolet','Ford','Nissan','Hyundai'];
document.write('Autos: ',autos);
document.write('<br>');
autos = [0]='Honda';






















