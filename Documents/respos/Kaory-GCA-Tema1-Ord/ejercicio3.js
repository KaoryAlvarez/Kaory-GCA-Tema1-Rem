// Realice un programa que dado 3 lados de un triangulo pueda determinar su área. Valor 15 Pts.
// Recibe: arreglo [L1, L2, L3].
// Regresa: Área (redondeado a 2 dígitos).

function ejercicio3(L1, L2, L3) {

   let s = ((L1 + L2 + L3)/2);
   let areaTotal = Math.sqrt(s * (s - L1) * (s - L2) * (s - L3));

    return areaTotal.toFixed(2);
}