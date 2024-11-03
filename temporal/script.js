/* function crearSesion (id_usuario, nombre_usuario){
    let sesion = {
        id_sesion: 1,
        id_usuario: id_usuario,
        nombre_usuario: nombre_usuario
    }
    return sesion
}

let sesion1 = crearSesion (8, 'pepe')
let sesion2 = crearSesion (1, 'maria')

console.log (sesion1, sesion2) */


let productos_vendidos_hoy = [
    'teclado',
    'monitor',
    'celular'
]

for (let i = 0; i < productos_vendidos_hoy.length; i++)
{
    console.log(`Has vendido ${productos_vendidos_hoy[i]} exitosamente`)
}

function mostrarProducto(productos_vendidos_hoy) {
    let HTML = `
    <div>
        <h3>${productos_vendidos_hoy}</h3>
        <button>Ver estado de entrega</button>
    </div>
    <hr/>
    `;
    document.write(HTML);
}
for (let i = 0; i < productos_vendidos_hoy.length; i++)
{
    mostrarProducto(productos_vendidos_hoy[i])
}

