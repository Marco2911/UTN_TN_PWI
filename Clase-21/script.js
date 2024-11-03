//USER: nombre, email, remuneracion, puesto, tipo_contrato

const users = [
    {
        nombre: 'Luis',
        email: 'GmI7t@example.com',
        remuneracion: 2000,
        puesto: 'Programador',
        tipo_contrato: 'Indefinido',
        id: 1
    },
    {
        nombre: 'Carlos',
        email: 'jFpCf@example.com',
        remuneracion: 3000,
        puesto: 'Diseñador',
        tipo_contrato: 'Indefinido',
        id: 2
    },
    {
        nombre: 'Ana',
        email: 'jFpCf@example.com',
        remuneracion: 4000,
        puesto: 'Programador',
        tipo_contrato: 'Temporal',
        id: 3
    },
    {
        nombre: 'Pedro',
        email: 'jFpCf@example.com',
        remuneracion: 5000,
        puesto: 'Gerente',
        tipo_contrato: 'Indefinido',
        id: 4
    }
]

/* function filtrarProgramadores (usuarios) {
    const programadores = []
    for(let usuario of usuarios){
        if(usuario.puesto === 'Programador'){
            programadores.push(usuario)
        }
    }
    return programadores
}

let resultado = filtrarProgramadores(users)
console.log(resultado)

//Traeme a los que cobran mas de 2500

function filtrarRemuneracion (usuarios) {
    const remuneracion = []
    for(let usuario of usuarios){
        if(usuario.remuneracion > 2500){
            remuneracion.push(usuario)
        }
    }
    return remuneracion
}

let resultado2 = filtrarRemuneracion(users)
console.log(resultado2) */

/*function filtrar (lista, callbackFnCondition){
    const result = []
    for(const elemento of lista){
        if(callbackFnCondition(elemento)){
            result.push(elemento)
        }
    }
    return result
}

function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 2500
}

function condicionDiseniadores (usuario){
    return usuario.puesto === 'Diseñador'
}

let usuariosRemuneracionAlta = filtrar(users, condicionRemuneracionCaros)
console.log(usuariosRemuneracionAlta)

let diseñadores = filtrar(users, condicionDiseniadores)
console.log(diseñadores) */

/* const resultado = users.filter(
    function(usuario){
        return usuario.remuneracion > 2500
    }
)
console.log(resultado) */


//Productos: precio, nombre, stock, descripcion, id
const products = [
    {
        precio: 2000,
        nombre: 'Laptop',
        stock: 40,
        id: 1,
        descripcion: 'Laptop de 15 pulgadas'
    },
    {
        precio: 3000,
        nombre: 'Tablet',
        stock: 3,
        id: 2,
        descripcion: 'Tablet de 10 pulgadas'
    },
    {
        precio: 4000,
        nombre: 'Monitor',
        stock: 2,
        id: 3,
        descripcion: 'Monitor de 15 pulgadas'  
    },
    {
        precio: 5200,
        nombre: 'Monitor',
        stock: 2,
        id: 80,
        descripcion: 'Monitor de 25 pulgadas'  
    },
    {
        precio: 5000,
        nombre: 'Mouse',
        stock: 10,
        id: 4,
        descripcion: 'Mouse'
    },
    {
        precio: 6000,
        nombre: 'Teclado',
        stock: 70,
        id: 5,
        descripcion: 'Teclado'
    },
    {
        precio: 7000,
        nombre: 'Audifonos',
        stock: 4,
        id: 6,
        descripcion: 'Audifonos'
    }
]

//Filtrar por los productos que su stock sea mayor o igual a 5

//Filtrar por los productos que su precio este entre 4500 y 5500

//Filtrar por los productos que su descripcion contenga la palabra 'Moni'

const stock = products.filter(
    function(product){
        return product.stock >= 5
    }
)
console.log(stock)

const precio = products.filter(
    function(product){
        return product.precio >= 4500 && product.precio <= 5500
    }
)
console.log(precio)

const contiene = products.filter(
    function(product){
        return product.descripcion.includes('Moni')
    }
)
console.log(contiene)