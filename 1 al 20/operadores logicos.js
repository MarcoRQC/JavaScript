/*/OPERADOR && (y)
let a, b;
a = 30;
b = 30;
document.write(a == b); //trae true o false
document.write('<br>');


let continente, edad;
continente = prompt('INGRESE SU CONTINENTE...');
edad = prompt('INGRESE SU EDAD...');

 if (continente =='America' && edad >=18) {
    document.write('eres un adulto americano');
    
 }else{
        document.write('o no eres adulto, o no eres americano');
 }*/
let dia, mes, anio;
dia = prompt('INGRESE DIA...');
mes = prompt('INGRESE MES...');
anio = prompt('INGRESE AÑO...');
mes = parseInt(mes);
dia = parseInt(dia);
anio = parseInt(anio);

if (mes == 1 || mes == 2 || mes == 3) {
    document.write(dia + '/' + mes + '/' + anio + ' Pertenece al primer trimestre!<br>');
} else if (mes == 4 || mes == 5 || mes == 6) {
    document.write(dia + '/' + mes + '/' + anio + ' Pertenece al segundo trimestre!<br>');
} else if (mes == 7 || mes == 8 || mes == 9) {
    document.write(dia + '/' + mes + '/' + anio + ' Pertenece al tercer trimestre!<br>');
} else if (mes == 10 || mes == 11 || mes == 12) {
    document.write(dia + '/' + mes + '/' + anio + ' Pertenece al cuarto trimestre!<br>');
} else {
    document.write('Fecha no válida.<br>');
}