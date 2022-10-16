function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.toLocaleString('pt-BR')
msg.innerHTML = `Dia ${hora}. `

if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'imagens/manha.png'
    document.body.style.backgroundColor = '#93d3fc'

}else if(hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'imagens/tarde.png'
    document.body.style.backgroundColor = '#9d7361'
}else{
    //BOA NOITE
    img.src = "imagens/noite.png"
    document.body.style.backgroundColor = '#130d0b'
    }
}