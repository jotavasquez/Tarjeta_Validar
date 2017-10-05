function validate() {
  var tarjeta = prompt("Ingresa el n° de la tarjeta de crédito(16 dígitos)", "");
  var num = tarjeta.split(""); // convertir a array 
  var mun = num.reverse(); // da vuelta el orden del string
  var values = mun.map(function(x) { // map toma los elementos y devuelve en valores
      return parseInt(x); 
    }); 
  var pair = ""; 
  var odd = "";
  var luhn = pair.concat(odd); // unir ambos arrays
  var count = 0;

  for ( var i = 0; values.lenght; i++ ) { //iterar en cada elemento del array

      if ( i%2 == 0 ) { // verificar si el indice es par
         var multi = 2*values[i]; // multiplica por 2 el valor

        if ( multi*2 >= 10 ){ // si el doble de pair es mayor o igual a 10 
          var result = sum(arr);
          pair.push(result); //llevar resultado de pares a un array
        } else {
          pair.push(multi);
        }

      } else  { // si no es par, es impar
          odd.push(i);// llevar impares a un array
        } 
  } count++;

 if( sum(luhn) % 10 == 0 ) { // validar resultado 
  alert( tarjeta +" Tarjeta válida" );  
  
  } else {
  alert( tarjeta +" Tarjeta no válida" );  
  }
}



validate();



function sum(arr) {
    var sum = arr.reduce(function(b, a, i){ // sumar resultado
          return b + a; 
          });
    return sum;
}

