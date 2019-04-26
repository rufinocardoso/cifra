const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const criptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let resultado = ""
    let num = parseInt(capturaInput(1))
    let i
    for ( i = 0; i < palavra.length; i++) {
        if (palavra[i] == " ") {
            resultado += "-"
        } else {
            let letraCifrada = null
            let l = 0
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[l]
                l++
            }
            if (l < alfabeto.length + num) {
                resultado += alfabeto[l + num]
            }
            else if (l > alfabeto.length + num) {
                resultado += alfabeto[l]
            }
        }
    }
    console.log(resultado);
    
    devolveHTML(resultado)
}

const descriptografar = () => {
    let palavra = capturaInput(0).toUpperCase()
    let resultado = ""
    let num = parseInt(capturaInput(1))
    let i
    for ( i = 0; i < palavra.length; i++) {
        if (palavra[i] == "-") {
            resultado += " "
        } else {
            let letraCifrada = null
            let l = 26
            while (letraCifrada != palavra[i]) {
                letraCifrada = alfabeto[l]
                l--
            }
            if (l <= alfabeto.length - num) {
                resultado += alfabeto[l - num]
            }
            else if (l >= alfabeto.length - num) {
                resultado += alfabeto[l]
            }
        }
        console.log(resultado);
        
    }
    devolveHTML(resultado)
}

const capturaInput = (position) => {
    return document.getElementsByTagName('input')[position].value
}

const devolveHTML = (elemento) => {
    document.getElementById('resultado').innerHTML = elemento;
}

