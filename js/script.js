const JOKE_BUTTON = document.querySelector("#get-jokes-btn");

JOKE_BUTTON.addEventListener("click", get_jokes, false);

function get_jokes(event){
  const NUMBER = document.querySelector("input[type='number']").value;
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${NUMBER}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      let response = this.responseText;
      console.log(response);
    }
  }
  xhr.send();
  event.preventDefault();
  }