const fotos = ["a", "b", "c", "d", "e"]

for (let i = 0 ; i < fotos.length; i=i+2) {
    let fila = []
    console.log("fila");
    for ( let j=0 ; j < 2; j++) {
        fila.push(fotos[i+j]);
    }
    console.log("componente", fila);
}