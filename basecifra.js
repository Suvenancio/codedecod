var btn = document.querySelector("#codificar");
var btndecod = document.querySelector("#decodificar");
var selector = document.querySelector('#codificador');
var cod = document.querySelector('#radiocod');
var decod = document.querySelector('#radiodecod');

cod.addEventListener( 'change', () =>{
    console.log('deu')
    btn.classList.remove("invisível")
})

decod.addEventListener( 'change', () =>{
    console.log('deu')
    btndecod.classList.remove("invisívele")
})



btn.addEventListener( 'click', () =>{
    if(selector.value === "cifradecesar"){
        escolhas    
        cifraeDeCesarCod()   
    }
    else
    {
  
        base64Codificar()
    }
   
})

btndecod.addEventListener( 'click', () =>{
    if(selector.value === "cifradecesar"){
        escolhas            
        cifraeDeCesarDecod()
    }
    else{
        base64Decodificar()
    }
}
)

var escolhas = selector.addEventListener( 'change', ()=>{
    var vlrIncremento = document.querySelector("#qtdade")
    if(selector.value === "cifradecesar"){

        vlrIncremento.classList.remove("quantos")
    }
    else
    {
        vlrIncremento.classList.add("quantos")
    }
})


function cifraeDeCesarCod(){
    var valorRecebido = document.querySelector("#conteudo").value;
    var qtd = document.querySelector("#qtdade").value;
    var incremento = parseInt(qtd);
    var letras = valorRecebido.split('');

    var y = [];
    var z = [];
    var msncod = "";
    
 
    for(var i = 0; i < valorRecebido.length; i++){
      z.push(valorRecebido.charCodeAt(i));
      
         y.push(z[i] + incremento)  ;
}

        for(var j = 0; j <= y.length;j++){
            msncod += String.fromCharCode(y[j])  
        console.log(msncod)
    }

             var resposta = document.querySelector("#resposta").innerHTML = msncod;

}

function cifraeDeCesarDecod(){
    var recebido = document.querySelector("#conteudo").value;
    var qtda = document.querySelector("#qtdade").value;
    var soma = parseInt(qtda);
    console.log(recebido)

    var codeDocodigo = [];
    var code = [];
    var mensagemCodif = "";
    console.log(code)
    console.log(codeDocodigo)
    console.log(mensagemCodif)
 
    for(var i = 0; i < recebido.length; i++){
        code.push(recebido.charCodeAt(i));
      
      codeDocodigo.push(code[i] - soma)  ;
}

        for(var j = 0; j <= codeDocodigo.length;j++){
            mensagemCodif += String.fromCharCode(codeDocodigo[j])  
       
    }

             var resposta = document.querySelector("#resposta").innerHTML = mensagemCodif;

}
       

function base64Codificar(){
    var fraseRecebida = document.querySelector("#conteudo").value;
    var codificada = btoa(fraseRecebida);
    var resposta = document.querySelector("#resposta").innerHTML = codificada;
}

function base64Decodificar(){
    var valorecebido = document.querySelector("#conteudo").value;
    var cod = atob(valorecebido)
    var resposta = document.querySelector("#resposta").innerHTML = cod;

}


