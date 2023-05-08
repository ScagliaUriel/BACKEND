import MensajesRepo from "./repos/mensajesRepo.js";

const mensajes = new MensajesRepo()

await mensajes.save({email: "uriel@uriel.com", name: "uriel", lastname: "scaglia", age: 42, alias: "cute", avatar: "el avatar", text: "Este es el mensaje", timestamp: "timestamp"});
await mensajes.save({email: "uriel@uriel.com", name: "uriel", lastname: "scaglia", age: 42, alias: "cute", avatar: "el avatar", text: "Este es el mensaje", timestamp: "timestamp"});
await mensajes.save({email: "uriel@uriel.com", name: "uriel", lastname: "scaglia", age: 42, alias: "cute", avatar: "el avatar", text: "Este es el mensaje", timestamp: "timestamp"});
//await mensajes.deleteById(1);
//await mensajes.update(2, {id: 2, email: "2uriel@uriel.com", name: "2uriel", lastname: "scaglia", age: 28, alias: "cute", avatar: "el avatar", text: "Este es el mensaje", timestamp: "timestamp"})
const repo = await mensajes.getAll();
console.log("-----------")
console.log(repo.length)
repo.map(p => console.log(p.verMensaje()));




// const prod = await productos.update("64177a9643d90afd0dcdd518", {title: "titulo4", price: 343, thumb: "thumb4"})
// console.log(prod)
// console.log(prod.verProducto());