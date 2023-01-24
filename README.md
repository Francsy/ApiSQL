# TB030-ApiRestSQL

### SQL API REST con Express - Posts del blog

Con PostgresSQL.


## Endpoints:


### `/api/entries (GET)`

Devuelve una lista con todos los posts.

### `/api/entries?email=ejemplo@gmail.com (GET)`

Devuelve los posts del autor que se le pasa por req.query.

### `/api/entries (POST)`

Publica un post. Debe incluirse title, content, email (del autor) y category. Ejemplo:

```javascript
{
    title:"La nueva tortilla vegana triunfa",
    content:"Hecha con harina de garbanzos, pura proteína",
    email:"alejandru@thebridgeschool.es",
    category:"Actualidad"
}
```

### `/api/entries/:title (PUT)`

Modifica la publicación (newTitle, content y category), pasando el título actual poor req.params.

Puedes modificar el ejemplo anterior:

En `/api/entries/La%20nueva%20tortilla%20vegana%20triunfa`

Pasar por req.body:
```javascript
{
    title:"La nueva tortilla vegana no es tan nueva",
    content:"Veganos llevan decadas disfrutandola"
    category:"Estilo de vida"
}
```
### `/api/entries (DELETE)`

Elimina la publicación pasando el title por req.body.

```javascript
{
    title:"La nueva tortilla vegana no es tan nueva"
}
```


### `/api/author (GET)`

Devuelve una lista con todos los autores.

### `/api/author/?email=ejemplo@gmail.com (GET)`

Devuelve un autor que pasando el email por req.query.

### `/api/author (POST)`

Crea un nuevo autor incluyendo los campos name, surname, email y image. Ejemplo:
```javascript
{
    name:"Friedrich",
    surname:"Nietzsche",
    email:"elnietzsche",
    image:"https://www.biografiasyvidas.com/biografia/n/fotos/nietzsche_2.jpg"
}
```
### `/api/author/:email (PUT)`

Modifica un autor pasando su email actual por req.params y los nuevos datos en req.body. Ejemplo:

`{"name":"Rick","surname":"picklerick","email":"ricksanchez@multiverse.com","image":"https://avatarfiles.alphacoders.com/128/thumb-128984.png"}`

### `/api/author (DELETE)`

Envia el email en req.body para eliminar autor.
```javascript
{
    email:"ricksanchez@multiverse.com"
}
```


Referencia del ejercicio en: https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_nov22/blob/master/teoria/back/clase16.md
