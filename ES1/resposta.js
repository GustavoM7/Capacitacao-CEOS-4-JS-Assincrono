const funcaoSoma = (n1, n2) => {
    return n1 + n2
}

const funcaoSubtracao = (n1, n2) => {
    return n1 - n2
}

const funcaoDoExercicioSugerido = (n1, n2, func) => {
    return func(n1, n2)
}

funcaoDoExercicioSugerido(6,4,funcaoSoma);
// Deve imprimir 10
	
funcaoDoExercicioSugerido(6,4,funcaoSubtracao);
// Deve imprimir 2

console.log(funcaoDoExercicioSugerido(6,4,funcaoSoma));
console.log(funcaoDoExercicioSugerido(6,4,funcaoSubtracao));