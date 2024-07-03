const conteudos = [
    [
        "Grécia me lembra filosofia",
        "Japão me lembra o monte Fuji",
        "Coreia do Sul me lmebra kpop"
    ],
    [
        "Alvorada me lembra de que?",
        "Itália me lembra cabriolet",
        "Florianópolis me lembra praia"
    ],
    [
        "Torres me lembra balonismo",
        "Portugal me lembra Nazaré",
        "Rio de Janeiro me lembra da estatua"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')
// btnTab3.addEventListener('click', displayContent())
function displayContent(itens) {
    let listaConteudo = ""
    for (const item of itens){
        listaConteudo += `<li>${item}</li>`
    }
    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo
    content.append(lista)
}

function activeButton(btn){
    btnTab1.className = ""
    btnTab2.className = ""
    btnTab3.className = ""
    btn.className = "active"
}

function handleClick(event) {
    const btnId = event.target.id
    activeButton(event.target)
    if(btnId === 'btn-tab1'){
        displayContent(conteudos[0])
    } else if(btnId === 'btn-tab2'){
        displayContent(conteudos[1])
    } else if(btnId === 'btn-tab3'){
        displayContent(conteudos[2])
    }
}

displayContent(conteudos[0])

btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)