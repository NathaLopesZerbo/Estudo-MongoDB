db.embedded.insertOne({
    nome: 'Nathã',
    idade: 30,
    endereco: {
        rua: 'Rua 60',
        numero: '2025',
        complemento: 'casa'
    }
})