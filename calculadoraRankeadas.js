function vitoriaDerrota(vitoria, derrota){
    return vitoria - derrota;
  }
  
   let saldo = vitoriaDerrota(7, 3)
    
   if (saldo < 10) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Ferro');
    } else if (saldo >= 11 && saldo < 20) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Bronze');
    } else if (saldo >= 21 && saldo < 50) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Prata');
    } else if (saldo >= 51 && saldo < 80) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Ouro');
    } else if (saldo >= 81 && saldo < 90) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Diamante');
    } else if (saldo >= 91 && saldo < 100) {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Lendário');
    } else {
        console.log('O saldo de rankeadas é de: ' + saldo + ' esta no nivel de Imortal');
    }
    