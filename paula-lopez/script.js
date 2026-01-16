console.log("=== PASO 1: REGISTRO DEL HEROE ===");

/*objeto aventurero*/
const aventurero = {
    nombre: "Aries",
    clase: "Guerrera",
    nivel: 1, 
    inventario: {}

};
console.log("Aventurero incial:", aventurero);

/*propiedad*/
aventurero.titulo = "La Valiente";
console.log("Se agrega titulo:", aventurero);

aventurero["puntosDeVida"] = 100;
console.log("Se agregan puntos de vida:", aventurero);