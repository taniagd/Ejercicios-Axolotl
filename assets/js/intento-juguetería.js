/*¨Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado. Paquetes de 1 kg. Número de paquetes que se van a enviar por pedido, */

function pedido (){
    let numPayasos=document.getElementById("payasos").value;
    let numMunecas=document.getElementById("munecas").value;
    let pesoMunecas = numMunecas*75;
    let pesoPayasos = numPayasos*112;
    let totalPeso = numMunecas + numPayasos;

    if (totalPeso <= 1000) {
        document.getElementById("peso").innerHTML = `<p> El peso total de tu paquete es de ${totalPeso} </p>`
    }
    if (totalPeso >1000) {
        while(totalPeso > 1000) {

    }

}

function totalBoxes(clowns, dolls){
    let totalBoxes = 0;
    let totalClownsWeight = 0;
    let totalDollsWeight = 0;
    
    let totalBoxClowns = 1000;
    for (let index = 0; index < clowns; index++) {
      if((totalClownsWeight + 112) >= totalBoxClowns){
        totalBoxes++;
        totalBoxClowns += 1000;
      }else{
        totalClownsWeight += 112;
      }
    }
    
    let totalBoxDolls = 1000;
    for (let index = 0; index < dolls; index++) {
      if((totalDollsWeight + 75) >= totalBoxDolls){
        totalBoxes++;
        totalBoxDolls += 1000;
      }else{
        totalDollsWeight += 75 + totalClownsWeight;
        totalClownsWeight = 0;
      }
    }
  
    console.log(totalBoxes)
    
  }
  
  totalBoxes(20, 20)