/*¨Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado. Paquetes de 1 kg. Número de paquetes que se van a enviar por pedido, */

function sacartotal(){
    let payasos = parseFloat(prompt("Ingresa el número de payasos")) //Variable payasos + parseo para que en el prompt se pida el ingreso del # de payasos.
    let munecas = parseFloat(prompt("Ingresa el número de muñecas")) //Variable muñecas + parseo para que en el prompt se pida el ingreso del # de muñecas
  
    total = ((payasos * 112) / 1000) + ((munecas * 75) / 1000) //Número de payasos por 112 g (su peso) entre mil (por el kilogramo). Número de muñecas por 75g(su peso)
    
    console.log(`Se enviarán ${Math.ceil(total)} paquetes`); //Se imprime en consola el mensaje. Math.ceil devuelve el entero mayor o igual más próximo a un npumero dado.  
}
sacartotal()