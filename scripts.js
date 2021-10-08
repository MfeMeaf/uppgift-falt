// Skapar en variabel vid namn btn som hämtar button med id knapp från index
var btn = document.getElementById("knapp");

// Sätter variablen btn till att lyssna efter ett tryck sen köra funktionen formVal
btn.addEventListener("click", validering1);

// kod som används för att avkolla om en string / text har följade i sig i denna ordning
const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
);

// Function för att hämta det som finns i de olika input fieldsen samt för att avkolla så att allt är rätt
function validering1() {
    // Skapar en konstant när kanppen trycks
    const user = document.getElementById("fname").value;

    // Kollar om namnet är längre än 3 bokstäver långt och om det inte är matar den ut "Användarnamn är för kort"
    if (user.length < 3) {
        // Ändrar en paragraph till att innehålla fel texten.
        document.getElementById("Fel").innerHTML = "Användarnamn är för kort";
    }

    if (user.length > 3) {
        // Sätter texten till att vara tom
        document.getElementById("Fel").innerHTML = "";
        validering2();
    }
}

// Function för att validera lösenord
function validering2() {
    // Konstanter för bägge lösenorden "Sätts varje gång formVal2 kallas och körs"
    const password = document.getElementById("psw").value;
    const password2 = document.getElementById("psw2").value;
    if (password2 != password || password.length < 5) {
        // Dessa två är för att skriva ut om lösenordet är för kort eller om de ej är samma
        if (password.length < 5) {
            document.getElementById("Fel").innerHTML = "Lösenord är för kort";
        } else if (password2 != password) {
            document.getElementById("Fel").innerHTML = "Lösenord är inte samma";
        }
    }

    if (password2 != password || password.length < 5) {
        // Dessa två är för att skriva ut om lösenordet är för kort eller om de ej är samma
        if (password.length < 5) {
            document.getElementById("Fel").innerHTML = "Lösenord är för kort";
        } else if (password2 != password) {
            document.getElementById("Fel").innerHTML = "Lösenord är inte samma";
        }
    }

    // Om lösenord är samma och längre än 5 "om den är så fortsätter den viade"
    if (password2 == password && password.length > 5) {
        validering3();
    }
}

//Function för att validera email
function validering3() {
    // Konstant för email "Som formVal2 sätts de varje gång formVal3 kallas och körs"
    const email = document.getElementById("mail").value;
    // Om email input följer standarden skickar den en vidare till sida2
    if (emailRegexp.test(email) == true) {
        window.location.replace("sida2.html");
    }
    // Om email input inte följer standarden skriver den "Email formatet är fel" samt sätter en röd underline decoration på texten
    else if (emailRegexp.test(email) == false) {
        document.getElementById("Fel").innerHTML = "Email formatet är fel";
        document.getElementById("mail").style.textDecoration = "underline red";
    }
}