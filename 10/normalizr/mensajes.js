import util from "util";
import { normalize, schema } from "normalizr";

const mensajes = {
  id: 'backendCoder09',
  messages: [
    {
      author: {
        email: 'urielscagliarcc@gmail.com',
        nombre: 'Uriel',
        apellido: 'Scaglia',
        edad: '28',
        alias: 'Uri',
        avatar: 'http://uriel.jpg'
      },
      dateAndTime: '24/1/2023, 20:44:09',
      text: 'Primer mensaje Uriel',
      id: 0
    },
    {
      author: {
        email: 'urielscagliarcc@gmail.com',
        nombre: 'Uriel',
        apellido: 'Scaglia',
        edad: '28',
        alias: 'Uri',
        avatar: 'http://uriel.jpg'
      },
      dateAndTime: '24/1/2023, 20:44:14',
      text: 'Segundo mensaje Uriel',
      id: 1
    },
    {
      author: {
        email: 'urielscagliarcc@gmail.com',
        nombre: 'Uriel',
        apellido: 'Scaglia',
        edad: '28',
        alias: 'Uri',
        avatar: 'http://uriel.jpg'
      },
      dateAndTime: '24/1/2023, 20:44:18',
      text: 'Hola a todos',
      id: 6
    }
  ]
}

console.log(JSON.stringify(mensajes));

function print(obj) {
  console.log(util.inspect(obj, false, 12, true));
}

// SCHEMAS

const authorSchema = new schema.Entity("author",{},{idAttribute: 'email'});

const messageSchema = new schema.Entity("message", {
  author: authorSchema,
});

const messagesSchema = new schema.Entity("messages", {
  messages: [messageSchema],
});

const messagesNorm = normalize(mensajes, messagesSchema);
print(messagesNorm);
