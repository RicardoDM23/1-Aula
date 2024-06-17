// let promessa = new Promise((resolve, reject) => {
//     try{
//         setTimeout(() => {
//             // resolve('Promessa bem sucedidade')
//             let resposta = []
//             if(false) {

//             }
//         }, 4000)
//     } catch {
//         setTimeout(() => {
//             reject(e)
//         }, 3000);
//     }
// })

// console.log(promessa)

//then permite encadear uma ação em sequencia da promise, podendo encadear varios then

let promessa2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let resposta = {}
        if(false) {
            resposta = {
                codigo: 404,
                erro: 'Obj não encontrado'
            }

            reject(respota)
        }

        resposta = {
            1: {id: 1, nome: 'Pedro'},
            2: {id: 2, nome: 'Joao'},
            3: {id: 3, nome: 'Paulo'}
        }

        resolve(resposta)
    }, 3000)
}).then(()=> {
    let promessa3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let resposta = {}
            if(false) {
                resposta = {
                    codigo: 1404,
                    erro: 'Erro normal'
                }
    
                reject(respota)
            }
    
            resposta = {
                1: {id: 1, nome: 'Jose'},
                2: {id: 2, nome: 'Rafael'},
                3: {id: 3, nome: 'Gabriel'}
            }
    
            resolve(resposta)
        }, 3000)
    }).then((dados) => {

    }).catch(erro => {
        console.log(erro)
    })
}).then(() => {
    console.log('then 2')
    return 'then 3'
}).then(param => {
    console.log(param)
})

console.log(promessa2)