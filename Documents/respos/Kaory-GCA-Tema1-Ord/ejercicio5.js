function ejercicio5(precio_basico) {
    

    if (precio_basico <= 20){
        precio_total = precio_basico; 

    }else if(precio_basico <= 40){
        impuesto = precio_basico * 0.3
        precio_total = precio_basico + impuesto;

    }else if (precio_basico < 500){
        impuesto = precio_basico * 0.4
        precio_total = precio_basico + impuesto;

    }else{
        impuesto = precio_basico * 0.5
        precio_total = precio_basico + impuesto;
    }

    return precio_total.toFixed(2);
}