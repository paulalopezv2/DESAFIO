console.log("=== PASO 1 ===");

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


console.log("=== PASO 2 ===");


/*objeto de identif */
const idGremio = {
  codigo: "GRM-001",
  fechaRegistro: "2026-01-15"
};

console.log("ID del Gremio (antes de congelar):", idGremio);

/* Congelar el objeto */
Object.freeze(idGremio);

/* Intentar modificar el código */
idGremio.codigo = "GRM-999";
idGremio.nuevaPropiedad = "Esto no debería existir";

console.log("ID del Gremio (después del intento de modificación):", idGremio);