window.addEventListener('load',init)
let currentWord=document.querySelector('#current-word')
let timeDispaly=document.querySelector('#time')
let scoreDisplay=document.querySelector('#score')
let isPlaying=true
let userVal=document.querySelector('#word-input')
let messageDisplay=document.querySelector('#message')
let btn=document.querySelector('#try_btn')
console.log(btn)
console.log(messageDisplay)
let time=6
let score=0;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',

    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];
console.log(currentWord)
function init(){
   wordGenerator(words)
   setInterval(timeManager,1000) 
   userVal.addEventListener('keyup',matchWord)
    
    
}

function wordGenerator(words){
    const randomIndex=Math.round(Math.random()*words.length)
    const GeneratedWord=words[randomIndex]
    currentWord.innerHTML=GeneratedWord
}
function timeManager(){
    if(time>0){
        time--
    }else if(time===0){
        isPlaying=false
        messageDisplay.innerHTML='Game Over'
        btn.style.display='block'
        btn.addEventListener('click',restart)
    }
   timeDispaly.innerHTML=time
}

function matchWord(e){
 if(isPlaying==true){
    console.log(e.target.value,currentWord)
     if(e.target.value==currentWord.innerText){
        messageDisplay.innerHTML='correct !!!'
        score++
        time=6
        scoreDisplay.innerHTML=score
        e.target.value= ''
        wordGenerator(words)
        isPlaying=true
       
     }
     else{
        messageDisplay.innerHTML=''
     }
    
 }
}
function restart(){
    location.reload()
}