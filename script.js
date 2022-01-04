let btn = document.querySelector('.btn')

function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fAno = document.querySelector("#txtano")
    var res = document.querySelector("div#res")
    if (fAno.value > ano || fAno.value.length == 0) {
        alert('Verifique os dados e tente novamente')
    }else  {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var fase = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/homem-bebe.png')
                fase = 'bebe'
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/homem-jovem.png')
                fase = 'jovem'
            }else  if (idade < 50){
                // adulto
                img.setAttribute('src', 'imgs/homem-adulto.png')
                fase = 'adulto'
            }else {
                // idoso
                img.setAttribute('src', 'imgs/homem-idoso.png')
                fase = 'idoso'
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imgs/mulher-bebe.png')
                fase = 'bebe'
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imgs/mulher-jovem.png')
                fase = 'jovem'
            }else  if (idade < 50){
                // adulto
                img.setAttribute('src', 'imgs/mulher-adulta.png')
                fase = 'adulta'
            }else {
                // idoso
                img.setAttribute('src', 'imgs/mulher-idosa.png')
                fase = 'idosa'
            }
        } else {
            alert('selecione um sexo')
            genero = '[sem genero]'
        }
        res.innerHTML = `detectamos um ${genero} ${fase} de ${idade} anos`
        res.appendChild(img)
    }
}

btn.addEventListener ('click', verificar)