    // Importação do FileSystem
	const fs = require("fs");
	
	// Função de leitura de arquivo
	fs.readFile("teste.txt", 'utf8', (err, data)=>{
		//...
	});
	//...
	
	// Função de escrita de arquivo
	fs.writeFile("destino.txt", DADOSAQUI, ()=>{
		//...
	});
