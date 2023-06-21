

const rockButton = document.getElementById('rock')
const scissorButton = document.getElementById('scissor')
const paperButton =document.getElementById('paper')

rockButton.addEventListener("click", function(){
  game('rock')
} )
paper.addEventListener('click', function(){
  game('paper')
})
scissorButton.addEventListener("click", function(){
  game('scissor')
})



  let computerCount= 0
  let playerCount=0 
  let ActionText='';
  let finalScore=''

 

  function whoWins(){
   
    document.getElementById('finalScore').textContent = finalScore;
  }

function updateScore(){
   document.getElementById('playerscore').textContent = playerCount
  document.getElementById('computerScore').textContent = computerCount
}

function updateText(){
  document.getElementById('comment').textContent = ActionText;
 
}
function game(selection){

 
  const choices= ['rock', 'paper', 'scissor']
  
  const computerSelection = choices[Math.floor(Math.random() * choices.length)]  ;
  

    if (computerSelection === selection) {
      ActionText='its a tie'
      console.log(ActionText)
     computerCount= computerCount
    }else if(
      (computerSelection =='rock' && selection=='scissor') ||
      (computerSelection==='paper'&& selection==='rock')||
      (computerSelection==='scissors'&& selection=== 'paper')
    ){
      ActionText='compter wins'
      console.log(ActionText)
        computerCount++
        console.log(computerCount)
      }else{
        ActionText='player wins'
        console.log(ActionText)
       playerCount++
      }

      if(computerCount==5){
        finalScore='computer wins the game '
         computerCount= 0
         playerCount=0 
      }else if(playerCount==5){
        finalScore='player wins the game'
        computerCount= 0
        playerCount=0 
      }else{
        finalScore=''
      }
    
      updateScore()
      updateText()
      whoWins()

}