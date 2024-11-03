let productos = [
    {
        titulo: 'Coca Cola',
        precio: 1000,
        descripcion: 'Bebida energetica',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Sprite',
        precio: 1200,
        descripcion: 'Bebida energetica sabor limon',
        stock: 5,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 1400,
        descripcion: 'Bebida energetica sabor naranja',
        stock: 7,
        id: 3
    },
    {
        titulo: 'Pepsi',
        precio: 900,
        descripcion: 'Bebida energetica',
        stock: 4,
        id: 4
    }
]

/* function obtenerProductoPorId( producto_id ) {
    for(let producto of productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}

let producto_encontrado = obtenerProductoPorId(4)
console.log('Producto encontrado:', producto_encontrado) */

function obtenerProductosMayoresA1100 () {
    let array_resultante = []
    for(let producto of productos){
        if(producto.precio > 1100){
            array_resultante.push(producto)
        }
    }
    return array_resultante
}

let productosCaros = obtenerProductosMayoresA1100()
console.log(productosCaros)