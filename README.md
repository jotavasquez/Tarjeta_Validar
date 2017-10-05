#Validar Tarjeta de Crédito v 0.1
______
El siguiente programa utiliza el [algoritmo de Luhn](http://https://es.wikipedia.org/wiki/Algoritmo_de_Luhn#Creaci.C3.B3n), creado por Hans Peter Luhn en la decada de 1950. Es de dominio público y es utilizado para validar números de tarjetas de crédito, números IMEI, etc.

##Funciones
Este código realiza las siguientes funciones:
1. Pide ingresar un número de tarjeta de crédito de 16 carácteres.
2. Comprueba por medio del algoritmo de Luhn si es un número válido.
3. Informa al usuario si el número es válido o no.


##Diagrama de Flujo
A continuación se presenta el funcionamiento del programa mediante un dragrama de flujo: 

![Diagrama de flujo
](link)

##Desglozando el Código
1. Se solicita el número de la tarjeta de credito a verificar mediante prompt
2. Se toma el string, se convierte en array, se voltea el orden de sus valores y se convierte a valor númerico mediante parseInt:
```
var num = tarjeta.split(""); // convertir a array 
  var mun = num.reverse(); // da vuelta el orden del string
  var values = mun.map(function(x) { // map toma los elementos y devuelve en valores
      return parseInt(x); 
    }); 
``` 
3. Ciclo for itera entre los valores para realizar el algoritmo de Luhn. Aplica el algoritmo a los valores del array resultante: crea dos arrays, uno de resultados pares e impares.

```
for ( var i = 0; values.lenght; i++ ) { //iterar en cada elemento del array

      if ( i%2 == 0 ) { // verificar si el indice es par
         var multi = 2*values[i]; // multiplica por 2 el valor

        if ( multi*2 >= 10 ){ // si el doble de pair es mayor o igual a 10 
          var result = multi.reduce(function(b, a, i){ // sumar resultado
          return b + a; 
          });
          pair.push(result); //llevar resultado de pares a un array
        } 

      } else  { // si no es par, es impar
          odd.push(i);// llevar impares a un array
        } 
  } count++;

```  

4. Luego un ciclo if verifica si el resultado es verdadero o falso y muestra mensaje de alert al usuario con la validación.

```
if( result % 10 == 0 ) { // validar resultado 
  alert( tarjeta +" Tarjeta válida" );  
  
  } else {
  alert( num +" Tarjeta no válida" );  
  }

```
# Tarjeta_Validar
