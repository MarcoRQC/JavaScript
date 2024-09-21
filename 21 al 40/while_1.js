/*let f = 1;


while (f <=100) {
    document.write('vuelta n°. ', f);
    document.write('<br>');
    f++;
    
}
document.write('FIN DEL BUCLE') */

let f = 1;
let suma = 0;
let valor;
while (f <= 5){ 
    valor = parseInt(prompt('Ingrese valor'))
    suma = suma + valor;
    f++;
}
document.write("la suma es: ", suma , '<br>');








