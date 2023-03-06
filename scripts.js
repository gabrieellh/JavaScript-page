/* PROMISES */


/* Fazendo um novo pedido! */

console.log('Fazendo um pedido')

const pedido = new Promise((responseYes, responseNo) => {
    return responseYes(console.log('Aguardando'))
})

console.log('Seu pedido chegou no local indicado!')
pedido.then (result => console.log(result))
.finally (() => console.log('Finalizado'))

/*Quer fazer um novo pedido?*/

/* Não quero fazer um novo pedido!*/

console.log('Deseja fazer um novo pedido?')
const novoPedido = new Promise ((no, yes) => {
    return no(console.log('Tem certeza dessa decição?'))
})

console.log('OK. Muito obrigado pela preferencia!')

