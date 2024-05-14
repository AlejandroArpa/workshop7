


Object.prototype.get = () => {
    return ( {...this} )
}

function Person(name, password, email, id){
    this.name = name
    this.password = password
    this.email = email
    this.id = id
}


const person1 = new Person('Pepito', 123456, 'pepito@perez.com', 1)

console.log( person1.get() );

function User(name, password, email, id, pointsStock){
    Person.call(this, name, password, email, id)
    this.pointsStock = pointsStock
}

User.prototype = Object.create(Person.prototype)
User.prototype.constructor = User

User.prototype.acomularPuntos = ( points ) => {
    this.pointsStock += points 
}

User.prototype.canjearPuntos = ( points ) => {
    this.pointsStock -= points 
}

function Admin(name, password, email, id){
    Person.call(this, name, password, email, id)
}

Admin.prototype = Object.create(Person.prototype)
Admin.prototype.constructor = Admin

Admin.prototype.agregarProducto = ( product ) => {
    // appendProduct(product)
}

Admin.prototype.modificarProducto = ( product ) => {
    // updateProduct(product)
}

Admin.prototype.eliminarProducto = ( product ) => {
    // deleteProduct(product)
}

function Product ( name, id, puntosNecesarios, cantidadDisponible, stock, categoria_id ){
    this.name = name
    this.id = id
    this.puntosNecesarios = puntosNecesarios
    this.cantidadDisponible = cantidadDisponible
    this.stock = stock
    this.categoria_id = categoria_id
}

function DigitalProduct ( name, id, puntosNecesarios, cantidadDisponible, stock, categoria_id, url ){
    Product.call( this, name, id, puntosNecesarios, cantidadDisponible, stock, categoria_id )
    this.url = url
}

DigitalProduct.prototype = Object.create( Product.prototype );
DigitalProduct.prototype.constructor = DigitalProduct;

DigitalProduct.prototype.descargar = () => {

}

DigitalProduct.prototype.obtenerProductEmail = () => {

}

function PhysicalProduct ( name, id, puntosNecesarios, cantidadDisponible, stock, categoria_id, precio ){
    Product.call( this, name, id, puntosNecesarios, cantidadDisponible, stock, categoria_id )
    this.precio = precio
}

PhysicalProduct.prototype = Object.create( Product.prototype );
PhysicalProduct.prototype.constructor = PhysicalProduct;

PhysicalProduct.prototype.actualizarStock = () =>{

}

PhysicalProduct.prototype.enviarProducto = () => {

}

function Activity ( type, pointsGiven ){
    this.type = type;
    this.pointsGiven = pointsGiven;
}

Activity.prototype.completeActivity = () =>{

}

function Categories ( name, id, description ){
    this.name = name;
    this.id = id;
    this.description = description;
}

Categories.prototype.listProducts = () => {

}

function ExchangeOrder ( user_id, product_id, date ){
    this.user_id = user_id;
    this.product_id = product_id;
    this.date = date;
}

ExchangeOrder.prototype.confirmOrder = () => {

}

ExchangeOrder.prototype.cancelOrder = () => {
    
}
