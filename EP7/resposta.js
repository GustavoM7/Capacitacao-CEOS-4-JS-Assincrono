const fs = require('fs');

function leitor(escritorUperLow, textTitle){
    fs.readFile(textTitle, 'utf8', (err, data)=>{
        if (err) throw err;
        console.log("arquivo foi lido...");
        escritorUperLow(data);
    });
}

async function escritorUperLow(data){
    await fs.writeFile("saidaNormal.txt", data, (err)=>{
		if (err) throw err;
  		console.log('saidaNormal.txt foi salva!');
    });

    data.toLowerCase();
    console.log(data);

    await fs.writeFile("saidaMinuscila.txt", data, (err)=>{
		if (err) throw err;
  		console.log('saidaMinuscila.txt foi salva!');
    });
    
    data.toUpperCase();
    console.log(data);

    await fs.writeFile("saidaMaiuscula.txt", data, (err)=>{
		if (err) throw err;
  		console.log('saidaMaiuscula.txt foi salva!');
    });

}

leitor(escritorUperLow, "teste.txt")