const arrayDeProductos = [{
    producto: "televisor",
    precio: 50000,
    marca: "samsung",
    id: 1
}, {
    producto: "lavarropas",
    precio: 60000,
    marca: "LG",
    id: 2,
    }, {
    producto: "celular",
    precio: 70000,
    marca: "samsung",
    id: 3
}]
function getAll() {
    return arrayDeProductos;
}

function getById(id: number) {
    const idDelProduct = arrayDeProductos.find(function (p) {
        return p.id == id;    
    })
    return idDelProduct;
}

export {
    getAll,
    getById
}

