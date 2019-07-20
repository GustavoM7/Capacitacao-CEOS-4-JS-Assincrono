let meuresultado

const pegandoDados = new Promise((resolve, reject)=>{ setTimeout(()=>{
    meuresultado = Math.floor(Math.random()*1000);

    if(meuresultado > 300){
        resolve("O resultado foi recebido com sucesso");
    } else {
        reject("ERRO! Resultado inferior a 300")
    }
    
},1000)});

pegandoDados.then(
    resolve => console.log(`${resolve}: ${meuresultado}`),
    reject => console.log(`${reject}: ${meuresultado}`)
);