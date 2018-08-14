// Assign the button to a variable
const JOKE_BUTTON = document.querySelector("#get-jokes-btn");
// Create event listener to whenever the user clicks the button
JOKE_BUTTON.addEventListener("click", get_jokes, false);

function get_jokes(event){
  // Get the value from the input with an input type of number
  const NUMBER = document.querySelector("input[type='number']").value;
  // Instantiate a new request
  let xhr = new XMLHttpRequest();
  // Connect to the API
  xhr.open("GET", `http://api.icndb.com/jokes/random/${NUMBER}`, true);

  xhr.onload = function(){
    // Proceed if everything is okay with the web server
    if(this.status === 200){
      // Get back JSON object
      let response = this.responseText;
      // Convert to JS object
      let jsObj = JSON.parse(response);
      // Variable which is going to output the contents to front-end
      let output = "";
      // Proceed if successfully obtained jokes
      if(jsObj.type === "success"){
        // Loop through the number of gags
        jsObj.value.forEach(function(gags){
          // Get the joke from the object
          output += `<li>${gags.joke}</li>`;
        });
      } else {
        output += "Request error."
      }
      // Display jokes on the front-end
      document.querySelector("#jokes").innerHTML = output;
    }
  }
  xhr.send();
  event.preventDefault();
  }