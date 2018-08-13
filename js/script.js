const JOKE_BUTTON = document.querySelector("#get-jokes-btn");

JOKE_BUTTON.addEventListener("click", get_jokes);

function get_jokes(event){
  console.log(1);
  
  event.preventDefault();
}