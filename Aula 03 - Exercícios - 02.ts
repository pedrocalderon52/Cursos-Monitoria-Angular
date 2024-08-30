/*Crie um algoritmo que mostre todos os números primos dentro
dos 50 primeiros números decimais já determinados no programa
no final utilize o console.log para imprimir estes números */


for (let i: number = 0;i<50;i++){

    let qtde_divisores: number = 0

    for (let divisor: number = i; divisor > 0; divisor--){
        if (i % divisor == 0){
            qtde_divisores++
        }
    }
    if (qtde_divisores == 2){
        console.log(`${i} é primo \n\n`)
    }
}