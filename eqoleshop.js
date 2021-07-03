// let alerta = alert('Bienvenido al Eqole Shop!')
// let nombre = prompt('Indicanos tu nombre por favor')


let cart = []



class Producto {
    constructor(id, titulo, precio, stock) {
        this.id = id
        this.title = titulo
        this.price = precio
        this.stock = stock
    }
    getId = function () {
        return this.id
    }

    getTotal = function (qty) {
        return this.precio * qty
    }

    getCompra = function (qty) {
        return {
            product: this,
            quantity: qty,
            monto: this.getTotal(qty)
        }
    }

    addToCart = function (qty) {
        cart.push(this.getCompra(qty))
    }

}

// 6 objs para la tienda

const producto1 = new Producto(1, 'Hoodie', 2000, 25)
const producto2 = new Producto(2, 'Campera', 2000, 10)
const producto3 = new Producto(3, 'Camiseta', 1700, 10)
const producto4 = new Producto(4, 'Remera de Mujer', 1200, 15)
const producto5 = new Producto(3, 'Remera de hombre', 1200, 10)
const producto6 = new Producto(4, 'Iphone Case', 900, 15)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6]


function calculadora(payment, precio) {

        if (payment === 1) {
            alert(precio)
        }else if (payment === 3) {
            alert(precio/3)
        }else if (payment === 6) {
            alert(precio/6)
        }else if (payment === 12) {
            alert(precio/12)
        }else if (payment === 18) {
            alert(precio/18)
        }else {
            alert('Indique el un valor correcto. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes')
        }
    }



//aca tengo la prenda que quiere

    let product = prompt(nombre + ', ' + 'selecciona el producto para tu carrito: \n Hoodie \n Campera \n Camiseta \n Remera de Mujer \n Remera de hombre \n Iphone Case ')

    if ( product === 'hoodie' || product === 'Hoodie') {
        
        alert('Genial ' + nombre + '. La Hoodie vale ' + producto1.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes'));;
        // let hoodie = Number(producto1.price)
        calculadora (payment, producto1.price);


    }else if ( product === 'campera' || product === 'Campera') {
        alert('Genial ' + nombre + '. La Campera vale ' + producto2.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un pago unico, en 3, 6, 12 o 18 cuotas s/interes'));
        
        (calculadora (payment, producto2.price));

    }else if ( product === 'camiseta' || product === 'Camiseta') {
        alert('Genial ' + nombre + '. El Camiseta vale ' + producto3.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes'));;
        
        calculadora (payment, producto3.price);

    }else if (product === 'remera de dama' || product === 'Remera de dama') {
        alert('Genial ' + nombre + '. La Remera-Dama vale ' +  producto4.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes'));;
        
        calculadora (payment, producto4.price);

    }else if ( product === 'remera de hombre' || product === 'Remera de hombre') {

        alert('Genial ' + nombre + '. La Remera-Hombre vale ' + producto4.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes'));;
        
        calculadora (payment, producto4.price);
        

    }else if ( product === 'Iphone Case' || product === 'case' || product === 'iphone' || product === 'iphone case' ) {

        alert('Genial ' + nombre + '. La IphoneCase vale ' + producto5.price)
        let payment = Number(prompt(nombre + ' elegi la forma de pago. Puede ser en un 1, 3, 6, 12 o 18 cuotas s/interes'));;
        
        calculadora (payment, producto5.price);
    }



