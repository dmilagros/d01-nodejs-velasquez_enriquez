class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascotas(mascota) {
    this.mascotas.push(mascota);
  }

	getMascotas() {
    return this.mascotas.map((mascota) => mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}
const librosUsuario = [
  { nombre: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  { nombre: "El señor de los anillos 2", autor: "J.R.R. Tolkien" },
  { nombre: "El señor de los anillos 3", autor: "J.R.R. Tolkien" },
];

const mascotasUsuario = ["perro", "gato", "pez"];

const u = new Usuario("Juan", "Perez", librosUsuario, mascotasUsuario);

console.log('getFullName',u.getFullName());
console.log('addMascotas',u.addMascotas("mono"));
console.log('getMascotas',u.getMascotas());
console.log('countMascotas',u.countMascotas());
console.log('addBook',u.addBook("El señor de los anillos 4", "J.R.R. Tolkien"));
console.log('getBookNames',u.getBookNames());

