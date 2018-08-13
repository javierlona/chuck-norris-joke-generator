const JOKE_BUTTON = document.querySelector("#get-jokes-btn");

JOKE_BUTTON.addEventListener("click", get_jokes, false);

function get_jokes(event){
  const NUMBER = document.querySelector("input[type='number']").value;
  
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${NUMBER}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      // Get back JSON object
      let response = this.responseText;
      // Convert to JS object
      let jsObj = JSON.parse(response);
      console.log(jsObj);

      let output = "";
      console.log(jsObj.type);
      
      if(jsObj.type === "success"){
        console.log(jsObj.value.joke);
        jsObj.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "Request error."
      }
      document.querySelector("#jokes").innerHTML = output;

    }
  }
  xhr.send();
  event.preventDefault();
  }