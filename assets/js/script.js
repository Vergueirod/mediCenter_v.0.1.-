// let menuMobile = document.querySelector(".menuMobile");
// console.log(`conexao ok`);

// criar funcao
// inserir o lisener para clique
// inserir a condicao IF para trocar do menu mobile para o lista menu

let menuMobile = document.querySelector(".menuMobile").addEventListener("click", function(){
    if(document.querySelector(".lista_menu").style.display == 'flex'){
        document.querySelector(".lista_menu").style.display = 'none';
    }

    else{
        document.querySelector(".lista_menu").style.display = 'flex';
    }

    })
