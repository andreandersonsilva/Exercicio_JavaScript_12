function verificar(){

   var data = new Date()
   /*Aqui ele pega o ano atual com quatro dígitos */
   var ano = data.getFullYear()
   /* Aqui faço a ligação da caixa de texto do ano de nascimento ligando o código ao txtano que está lá */
   var fano = document.getElementById("txtano")
   var res = document.getElementById("res")
   /* Aqui eu vou verificar se foi preenchido o ano no campo ou não deixando uma mensagem de alerta*/
   if(fano.value.length == 0 || fano.value > ano){
       alert("ERRO - Digite o ano novamente")
   }else{
       /*criado variável pra radio que deve conter o mesmo name neles para quando clicar em um desmarcar o outro*/
       var fsex = document.getElementsByName("radsex")
       /* calculando a idade*/
       var idade = ano - fano.value
       /* Criando a variável do gênero*/
       var genero = ""
       /*Criando um IMG no JS, aqui criei uma TAG*/
       var img = document.createElement('img')
       /*Aqui criei um ID pro IMG*/
       img.setAttribute("id", "foto")
       /*Verificando o sexo da pessoa*/
       if(fsex[0].checked){
           genero = "HOMEM"
           if(idade >= 0 && idade <10){
               //CRIANÇA
               img.setAttribute("src","menino.png")
           }else if(idade < 21){
               //JOVEM
               img.setAttribute("src","jovem_homem.png")
           }else if(idade < 50){
               //ADULTO
               img.setAttribute("src","adulto-homem.png")
           }else{
               //IDOSO
               img.setAttribute("src","idoso.png")
           }
       }else if(fsex[1].checked){
           genero = "MULHER"
           if(idade >= 0 && idade <10){
               //CRIANÇA
               img.setAttribute("src", "menina.png")
           }else if(idade < 21){
               //JOVEM
               img.setAttribute("src", "jovem_mulher.png")
           }else if(idade < 50){
               //ADULTO
               img.setAttribute("src", "adulto_mulher.png")
           }else{
               //IDOSO
               img.setAttribute("src", "idosa.png")
           }
       }
       res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
       //Aqui informo onde e o ID IMG para aparecer a imagem
       res.appendChild(img)
   }

}