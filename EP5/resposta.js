const esperar = (milliseconds) => {
    return new Promise(resolve =>{
        setTimeout(resolve, milliseconds);
    });
}

async function rotina(){
    console.log("Acordei!");
    console.log("Tomando banho...");
    await esperar(3000);
    console.log("Tomando café...");
    await esperar(5000);
    noticiarioEMeme();
    console.log("Escovando os dentes...");
    await esperar(3000);
    console.log("Passando fio dental...");
    await esperar(2000);
    console.log("Passando exaguante bucal...");
}

async function noticiarioEMeme(){
    console.log("Assistindo noticiário local...")
    await esperar(1000);
    console.log("POSTANDO MEME NO ZAP")
}

rotina();
