let nombre, edad;
nombre = prompt('Ingrese su nombre...');
edad = prompt('Ingrese su edad...');
edad = parseInt(edad);

if(edad >= 18) {
    document.write('BIENVENIDO ', nombre);
  }else{
    if(edad < 18){
        document.write(nombre, ' eres menor de edad XD');
    }
    else{
        document.write('NO INGRESASTE DATOS');

    }
    
  }


