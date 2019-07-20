let meuresultado

const pegandoDados = new Promise((resolve, reject)=>{ setTimeout(()=>{
    meuresultado = Math.floor(Math.random()*1000);
    if(meuresultado < 100){
        reject(new Error("Menor que 100!"));
    } else if (meuresultado > 900){
        reject(new Error("Maior que 900!"));
    } else if (primo(meuresultado)){
        reject(new Error("Número primo!"));
    } else if (meuresultado % 7 == 0){
        reject(new Error("Número multiplo de 7!"));
    } else if (meuresultado % 13 == 0){
        reject(new Error("Número multiplo de 13!"));
    } else if (meuresultado % 21 == 0){
        reject(new Error("Número multiplo de 21!"));
    } else if (meuresultado % 23 == 0){
        reject(new Error("Número multiplo de 23!"));
    } else {
        resolve("O resultado foi recebido com sucesso");
    }
},1000)});

pegandoDados.then(
    resolve => console.log(`${resolve}: ${meuresultado}`)
).catch(
    reject => console.log(`${reject}: ${meuresultado}`)
);

//Para verificar se numero é primo
function primo(num) {
    // verifica se o numero digitado é "1", que não é primo
     if(num!=1){
      for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
      return num !== 1;
    }
}