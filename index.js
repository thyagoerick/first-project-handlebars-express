// Import express
const express = require('express')
const app = express()
const port = 3000

// Import express-handlebars
const exphbs = require('express-handlebars')

/************ CONFIGURAÇÕES ************/
    // Configurando partials
    const hbs = exphbs.create({
        partialsDir:['views/partials']
    })
    
    // Configurando o handlebars (com o partials configurado)
    app.engine('handlebars', hbs.engine) 
    app.set('view engine', 'handlebars')

    // Configurando aceite de estilos (assets)
    app.use(express.static('public'))

/***************************************/


/************* REQUISIÇÕES *************/
const products = [
    {
        id: 1,
        img:null,
        name: 'Sapato',
        category:'Calçados',
        qty:8,
        un:'CX'
    },
    {
        id: 2,
        img:'https://images.tcdn.com.br/img/img_prod/811036/touca_gorro_stranger_str_2295_1_b9051628be2689bf717e2a6f1ff6868c.jpg',
        name: 'Touca',
        category:'Roupas',
        qty:5,
        un:'UNI'
    },
    {
        id: 3,
        img:null,
        name: 'Jaqueta',
        category:'Roupas',
        qty:2,
        un:'UNI'
    },
    {
        id: 4,
        img:null,
        name: 'MEIAS',
        category:'Roupas',
        qty:10,
        un:'PAC'
    },
]

app.get('/product/:id', (req,res)=>{
    const id = req.params.id

    const product = products.find(p => parseInt(p.id) === parseInt(id)) //pegando apenas 1 produto

    res.render('product', {product})
})

app.get('/', (req, res)=>{
    res.render('home', {products})
})
/***************************************/


/************** SERVIDOR ***************/
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})
/***************************************/










