import express from 'express'

const app = express()

const BBDD_USUARIOS = [//los id son string en realidad, generalmente
    { id: 0, nombre: "Ramiro", edad: 24 },
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Bruno", edad: 24 },
    { id: 3, nombre: "Mauro", edad: 24 }
]

app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/saludo', (req, res) => {
    res.send({ mensaje: "Hola te saludo desde el endpoint/saludo" })
})

app.get('/despedirse', (req, res) => {
    res.send("Adios, te saludo desde el endpoint/despedirse")
})

/* app.get('/usuarios/:id', (req, res) => {
   const id = req.params.id
 
    console.log(id);

    res.send("usted solicito informacion de este usuario con este id: " + id)
    
}) */

app.get('/usuarios/:id', (req, res) => {

    const id = req.params.id
    const queryParams = req.query

    console.log(queryParams);


    const usuarioEncontrado = BBDD_USUARIOS.find((usuario) => {
        return usuario.id === parseInt(id)
    })

    if (!usuarioEncontrado) {
        return res.status(404).send("No existe el usuario")
    }
    //limito el array de productos a el valor de limit
    //[1000 elementos]
    //10 primeros
    //slice(0,10)
    //const arrayLimitado = slice(0,limit)
    res.send("El usuario consultado tiene como nombre: " + usuarioEncontrado.nombre)

})

app.get('/usuarios/:id/perfil', (req, res) => {
    const id = req.params.id

    const usuarioEncontrado = BBDD_USUARIOS.find((usuario) => {
        return usuario.id === parseInt(id)
    })

    if (!usuarioEncontrado) {
        return res.status(404).send("No existe el usuario")
    }

    res.send("Perfil del usuario: " + usuarioEncontrado.nombre)

})

app.get('api/products')
app.get('api/carts')

app.post('/api/products/',(req,res) => {
    const body = req.body
    //en body voy a tener todo lo que me manden por body
    //body.tittle
    //body.description...etc

    res.send("")
})

app.listen(8080, () => {
    console.log("SV ON");
})