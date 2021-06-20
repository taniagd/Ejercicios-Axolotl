/*Recibes la tarea de construir un sistema de alarma para una fábrica de champús.
Tu sistema recibe las siguientes variables: 
  temperatura ambiente, 
  humedad ambiental, 
  número de trabajadores en la planta y 
  nivel de líquido en los tanques. 
La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales, 
si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo, 
o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).
Umbral superior 90% umbral inferior 30%
*/


let temperatura = 29;
let humedad = 51;
let trabajadores = 101;
let liquido = 91;

if (temperatura > 90) {
    document.write (`<h1> La alarma de temperatura ${temperatura} está activada </h1>`);
} else if (temperatura < 30) {
  document.write (`<h1> La alarma de temperatura ${temperatura} está activada </h1>`);
}

if (humedad > 50) {
    document.write (`<h1> La alarma de humedad ${humedad} está activada </h1>`);
}
if (trabajadores > 100) {
  document.write (`<h1> La alarma de trabajadores ${trabajadores} está activada </h1>`);
}
if (liquido > 90) {
  document.write (`<h1> La alarma de liquido ${liquido} está activada </h1>`);
}

//Else if se utiliza normalmente con las mismas variables 