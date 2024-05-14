


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

