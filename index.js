
  function rockclick () {
    console.log('rock')
  }
// get the button element
  const rockButton = document.getElementById('rock')
// add an event listener to it that calls handleClick when clicked
rockButton.addEventListener("click", rockclick )

function paperClick() {
    console.log('paper')
}
// get the paper button element
const paper = document.getElementById('paper')
// add an event listener to it
paper.addEventListener('click', paperClick)

function scissorClick(){
    console.log('scissor')
}
//get the scissors button element
const scissorButton= document.getElementById('scissor')
//add a click handler for this one too!
scissorButton.addEventListener("click", scissorClick)