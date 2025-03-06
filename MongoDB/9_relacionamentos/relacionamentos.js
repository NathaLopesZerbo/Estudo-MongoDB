
//Um para um  - One to One

db.embedded.insertOne({
    nome: 'Nathã',
    idade: 30,
    endereco: {
        rua: 'Rua 60',
        numero: '2025',
        complemento: 'casa'
    }
})


db.embedded.insertOne({
    nome: 'Allanis',
    idade: 16,
    enderecos: {
        casa:{
            rua: 'Rua 30',
            numero: '80',
            complemento: 'casa'
        },
        trabalho: {
            rua: 'Rua das palmeiras',
            numero: '300',
            complemento: 'Próximo a Padaria'
        }
    }
})  


db.pessoas.insertOne({
    nome: 'Natha',
    idade: 18,
    profissao: 'Ceramista'
})

db.enderecos.insertOne({
    rua: 'Rua das flores',
    numero: '1239',
    complemento: 'casa',
    pessoa_id: p._id
})


// Um para muitos - One to Many

db.pessoas.insertOne({
    nome: 'Sergio',
    idade: 41,
    profissao: 'Operador de Retro Escavadeira'
})

const sergio = db.pessoas.findOne({nome: 'Sergio'})

sergioId = sergio._id


db.compras.insertMany([
    {produtos: ['livro', 'celular'], pessoa_id: nathaId},
    {produtos: ['mouse', 'teclado'], pessoa_id: nathaId},
    {produtos: ['caderno', 'caneta'], pessoa_id: sergioId},
    {produtos: ['barbeador', 'moto'], pessoa_id: sergioId},
    
])


db.pessoas.insertOne({
    nome: 'Vanessa',
    idade: 42,
    profissao: 'Operadora de Maquina'
})