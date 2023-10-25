//Realice un programa que dado el radio y la altura de un cilindro calcule el área y el volumen del mismo. Valor 15 Pts.
// Recibe: radio, altura.
// Regresa: arreglo [área, volumen] (redondeado a 2 dígitos).
//

function ejercicio1(radio, altura) {

    area = (2 * Math.PI * radio * (radio + altura));
    volumen = (Math.PI * (radio**2) * altura);

    return [area.toFixed(2), volumen.toFixed(2)];
}