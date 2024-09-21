/*let valor;

do {
    valor = parseInt(prompt('ingrese valor 1 para salir..'));
    document.write('ingreso valor: ', valor);
    Document.write('<br>');
} while (valor != 1);
document.write('fin de bucle'); */

let usuario, clave, control;
control = 0;
usuario = prompt('ingrese usuario');	
clave = prompt('ingrese clave');
do {
    if (clave != 'admin2020') {
        clave = prompt('clave incorrecta\n' +
                    'Intente de nuevo...');
                 control = 0;
    }else{
        control = 1;
    }
    } while(control != 1);
    document.write('clave correcta');
    document.write('<br>');