const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 0,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    }
]

const productsContainerHTML = document.getElementById('products-container')

let resultado = ''

for(const producto of productos){
    let productoEsCaro = producto.precio > 5000

    //Esto tambien se puede escribir como resultado =+
    resultado = resultado + `
    <div>
        <h2>${producto.nombre}</h2>
        <span>Precio: $${producto.precio}</span><br>
        <span>Unidades disponibles: ${producto.stock}</span><br>
        ${
            productoEsCaro
            ? '<span>El producto es muy caro!</span>'
            : ''
        }<br>
        <button ${producto.stock === 0 ? 'disabled' : ''}>Comprar</button>
        <hr>
    </div>
    `
}

productsContainerHTML.innerHTML = resultado
