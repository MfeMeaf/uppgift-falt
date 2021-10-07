
var btn = document.getElementById("knapp");

btn.addEventListener("click", formVal);

// Constructor som avkollar om en string / text har följade i sig i denna ordning
const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
// Function för att hämta det som finns i de olika input fieldsen samt för att avkolla så att allt är rätt
function formVal(){
    const user = document.getElementById("fname").value;
    const password = document.getElementById("psw").value;
    const password2 = document.getElementById("psw2").value;
    const email = document.getElementById("mail").value;
    if(user-length < 3){
        console.log("Användarnamn är för kort")
    }
    if(password2 != password){ 
       console.log("Lösenord är inte samma")
    }
    if(password.length < 6){
        console.log("Lösenord är för kort")
    }
    // jämnför lösenord samt om email följer standarden från emailRegexp på rad 7-9
    if(password2 == password && password.length > 6){
        if(emailRegexp.test(email) == true){
            window.location.replace("sida2.html")
        }
        else if(emailRegexp.test(email) == false){
            console.log("Email formatet är fel")
            document.getElementById("mail").style.textDecoration = "underline red"
        }
    }   
}
