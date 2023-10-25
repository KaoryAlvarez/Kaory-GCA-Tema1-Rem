// Realice un programa que dado el sueldo de un trabajador se aplique un aumento del 15% si sueldo es inferior a $1000 y 12% en caso contrario. Valor 20 Pts.
// Recibe: Sueldo.
// Regresa: Nuevo_Sueldo (redondeado a 2 dígitos).


function ejercicio4(sueldo) {

   if (sueldo < 1000){
    aumento = sueldo * 0.15
   }else{
    aumento = sueldo * 0.12
   }

      nuevo_sueldo = (sueldo + aumento)
      return nuevo_sueldo.toFixed(2);

}