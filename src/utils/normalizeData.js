import { normalize, schema } from 'normalizr';

// Cambio el nombre del ID agregando el tercer parámetro a la función schema
const author = new schema.Entity('authors', {}, {idAttribute: 'email'});

// Normalizo el contenido
const mensaje = new schema.Entity('mensaje', {
    author: author
}, {idAttribute: 'date'})

const mensajes = new schema.Entity('mensajes', {
    mensajes: [mensaje]
}, {idAttribute: 'id'})


const normalizeData = (data) => {
    return normalize(data, mensajes);
} 

export default normalizeData