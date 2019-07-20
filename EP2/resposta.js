// Importação do FileSystem
const fs = require("fs");

function transfer(leitorCallback, escritorCallback){
	console.log("Processando dados...")
	leitorCallback(escritorCallback);
}


// Função de leitura de arquivo
function leitor(escritorCallback){
		fs.readFile("teste.txt", 'utf8', (err, data)=>{
		if (err) throw err;
		console.log("Salvando dados...");
		escritorCallback(data)
	});
}

// Função de escrita de arquivo
function escritor(DADOSAQUI){
	fs.writeFile("destino.txt", DADOSAQUI, (err)=>{
		if (err) throw err;
  		console.log('Arquivo foi salvo!');
	});
}

transfer(leitor, escritor);