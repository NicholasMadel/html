//Get all Keys
//Pegando todas as teclas e criando uma grande lista de todas as DIVS que possuem a class ".key"
const keys = document.querySelectorAll('.key')

//trocar Nota Musical
function playNote(event){

    let audioKeyCode = getKeyCode(event)
    //tecla apertada

    const key= document.querySelector(`.key[data-key='${audioKeyCode}']`)
    
    //verificando se a key existe

    const cantFoundAnyKey = !key
    
    if(cantFoundAnyKey){return}

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

//Pegar o código da tecla (verificar qual o número da tecla apertada e retornar esse valor)
function getKeyCode(event){
        let keyCode;

        const isKeyBoard = event.type === 'keydown'
    
        if(isKeyBoard){
            keyCode = event.keyCode
        }
        else{
            keyCode = event.target.dataset.key
        }

        return keyCode
}

//Adicionar a classe Playing 
function addPlayingClass(key){
    key.classList.add('playing')
}

//Remover a classe Playing
function removePlayingClass(event){
    event.target.classList.remove('playing')
}

//Ativar e tocar o arquivo necessário de áudio 
function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key='${audioKeyCode}']`)
    audio.currentTime = 0;
    audio.play()
}

//Remover e criar os eventos Click na tecla e pressionar (keydown) uma tecla 
function registerEvents(){
    //Click com o mouse
    keys.forEach(function(key){
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    })
        
    //Pressionar uma tecla
    window.addEventListener('keydown', playNote)
}

//Adicionar no evento load (quando o site carrega) a função que cria e registra os eventos (registerEvents())
window.addEventListener('load', registerEvents)
