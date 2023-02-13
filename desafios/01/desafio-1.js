class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre        
        this.apellido = apellido  
        this.libros = libros      
        this.mascotas = mascotas        
    }
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    addMascota(nombreMascota){
        return( this.mascotas.push( nombreMascota ) )
    }
    countMascotas(){
        return(`Cantidad de mascotas que posee ${this.mascotas.length}`)
    }
    addBook(nombreLibro, autor){
        return( this.libros.push ( {nombreLibro, autor} ) )
    }
    getBooksNames(){
        const mapNombreLibros = this.libros.map( libro => libro.nombreLibro )
        console.log(`${this.getFullName()} posee estos libros en su biblioteca: ${mapNombreLibros}`)
    }
}

const test = new Usuario( "uriel", "scaglia", [], [] )

console.log(test.getFullName())
test.addMascota("Rocco")
test.addMascota("Roma")
test.addMascota("Miku")
console.log(test.countMascotas())
test.addBook("El Principito", "Antoine de Saint-Exupéry")
test.addBook("El señor de los anillos", "J. R. R. Tolkien")
test.getBooksNames()