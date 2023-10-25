//Realice un programa que dado un numero de segundos regrese el numero de horas, minutos y segundos con el siguiente formato: HH:MM:SS. Las horas (HH) debe ser un numero entre 00 y 24. Valor 20 Pts.
// Recibe: segundos.
// Regresa: cadena con formato “HH:MM:SS”.


function ejercicio2(segundos){
    let segunds=0, minutos=0, horas=0;

        for(let i=1; i<=segundos; i++){
            segunds++;

            if(segunds == 60){
                minutos++;
                segunds=0;
            }
            if(minutos == 60){
                horas++;
                minutos=0;
                segunds=0;
            }
        }

    return horas.toString()+":"+minutos.toString()+":"+segunds.toString();
}