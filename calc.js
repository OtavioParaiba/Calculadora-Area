'use-strict'

var res = document.getElementById('res')
var sel = document.getElementById('select')

//Criação das variaves das formulas matematicas

var altura = document.createElement('input')
altura.setAttribute('type', 'number');
altura.setAttribute('placeholder', 'Altura');
altura.setAttribute('name', 'altura');

var base = document.createElement('input')
base.setAttribute('type', 'number');
base.setAttribute('placeholder', 'Base');
base.setAttribute('name', 'base');

var baseMaior = document.createElement('input')
baseMaior.setAttribute('type' , 'number')
baseMaior.setAttribute('placeholder' , 'Base Maior')

var baseMenor = document.createElement('input')
baseMenor.setAttribute('type' , 'number')
baseMenor.setAttribute('placeholder' , 'Base Menor')

var lado = document.createElement('input')
lado.setAttribute('type' , 'number')
lado.setAttribute('placeholder' , 'Lado')

var raio = document.createElement('input')
raio.setAttribute('type' , 'number')
raio.setAttribute('placeholder' , 'Raio')

var diagonalMaior = document.createElement('input')
diagonalMaior.setAttribute('type' , 'number')
diagonalMaior.setAttribute('placeholder' , 'Diagonal Maior')

var diagonalMenor = document.createElement('input')
diagonalMenor.setAttribute('type' , 'number')
diagonalMenor.setAttribute('placeholder' , 'Diagonal Menor')

//Botão de calcular criado dinamicamete
var botao = document.createElement('button')
botao.innerText = 'Calcular'
botao.id = 'calcular'
botao.className = "btn btn-primary"

//Formulas Matematicas para cada possiblidade de forma

const formTri = (conta) =>{
    res.style.display = 'block'
    conta = (base.value * altura.value) / 2
    res.innerHTML = `A area do triangulo é ${conta}`
}


const formCir = (conta) =>{
    res.style.display = 'block'
    conta = (raio.value * raio.value) * 3.14
    res.innerHTML = `A area do Circulo é ${conta}`
}

const formRet = (conta) =>{
    res.style.display = 'block'
    conta = (base.value * altura.value) 
    res.innerHTML = `A area do Retangulo é ${conta}`
}

const formTra = (conta) =>{
    res.style.display = 'block'
    let nBaseMaior = Number(baseMaior.value)
    let nBaseMenor = Number(baseMenor.value)
    conta = ((nBaseMaior + nBaseMenor) * altura.value) / 2 
    res.innerHTML = `A area do Trapezio é ${conta}`
}


const formLos = (conta) => {
    res.style.display = 'block'
    conta = (diagonalMaior.value * diagonalMenor.value) / 2
    res.innerHTML = `A area do Losango é ${conta}`
}




//Função para selecionar a forma Geometrica
function definirF(){
    res.style.display = 'none'

    let divDados = document.getElementById('dados')
    let img = document.getElementById('imagemvar')

    divDados.innerHTML = ''
    res.innerHTML = ''

    if(sel.value == 'tri') {
        img.src = 'img/triangulo.png'
        
        divDados.appendChild(altura)
        divDados.appendChild(base)
        divDados.appendChild(botao)

        document.getElementById('calcular').addEventListener('click' , formTri)
    } 
    else if(sel.value == 'cir') {
        
        img.src = 'img/circulo.png'
        divDados.appendChild(raio)
        divDados.appendChild(botao)
        
        document.getElementById('calcular').addEventListener('click' , formCir)

    } else if(sel.value == 'ret') {
        img.src = 'img/retangulo.png'
        divDados.appendChild(altura)
        divDados.appendChild(base)
        divDados.appendChild(botao)

        document.getElementById('calcular').addEventListener('click' , formRet)

    } else if(sel.value == 'qua'){
        img.src = 'img/quadrado.png'
        divDados.appendChild(lado)
        divDados.appendChild(botao)

        document.getElementById('calcular').addEventListener('click' , formQua)
    } else if (sel.value == 'tra'){
        img.src = 'img/trapezio.png'
        divDados.appendChild(baseMaior)
        divDados.appendChild(baseMenor)
        divDados.appendChild(altura)
        divDados.appendChild(botao)
        
        
        document.getElementById('calcular').addEventListener('click' ,formTra)  

    } else if (sel.value == 'los' ){
        img.src = 'img/lozango.png'
        divDados.appendChild(diagonalMaior)
        divDados.appendChild(diagonalMenor)
        divDados.appendChild(botao)
        document.getElementById('calcular').addEventListener('click' ,formLos)  
    }

}






document.getElementById('btnForm').addEventListener('click' , definirF)