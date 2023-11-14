const button = document.getElementById("submit-btn");
const email = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const hero = document.querySelector(".hero");
const dismissMessage = document.querySelector("#dismiss-msg");
const attribution = document.querySelector(".attribution");

function validateEmail(e){
    e.preventDefault();
    const emailValue = email.value;
    
if(emailValue.length === 0){
errorMessage.style.display = "block";
email.style.border = "1px solid red";
email.style.background = "#f7bcbc";
email.style.color = "red";
}
if (!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
errorMessage.style.display = "block";
email.style.border = "1px solid red";
emailValue.style.background = "#f7bcbc";
emailValue.style.color = "red";
}
else{
successMessage.classList.add("open-success-message");
 hero.style.display = "none";
attribution.style.visibility = 'hidden';
}
};

button.addEventListener("click", validateEmail);

dismissMessage.addEventListener("click", () =>{
    hero.style.visibility = 'visible'
    successMessage.style.visibility = 'hidden';
location.reload();  
});