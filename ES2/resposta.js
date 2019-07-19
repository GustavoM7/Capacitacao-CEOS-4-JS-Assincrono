const meuIntervalo = setInterval(() => {
    console.log("Hello World")
}, 1000);


function interrompe(){
    clearInterval(meuIntervalo);
};

setTimeout(interrompe, 5000);