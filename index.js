let rankeada = vicDerrota(41,0)

function vicDerrota (vic, der){
    rank = vic - der
  return rank
}
if (rankeada<10){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Ferro")

}else if((11 == rankeada) || (rankeada <= 20)){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Bronze")

}else if((21 == rankeada) || (rankeada <= 50)){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Prata")

}else if((51 == rankeada) || (rankeada <= 80)){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Ouro")

}else if((81 == rankeada) || (rankeada <= 90)){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Diamante" )

}else if((91 == rankeada) || (rankeada <= 100)){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Lendário" )

}else if(rankeada > 101){

    console.log("O Herói tem de saldo de " + rankeada + " está no nivel de Imortal" )

}
