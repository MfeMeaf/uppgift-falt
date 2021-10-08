# uppgift-fält Felix L

Javascript


|||||

Documentation "Vad som används och varför"

Bootstrap: För att det gör livet enklare.

"Bootstrap användes endast för knappens utseende"


"Visste lite från innan hur man kunde göra detta men för hela denna kod av innehållet hittade jag av en annan person"


    const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
     )
  
  
  Denna är ett objkt kod  "Regular expression" som man kan använda för att jämnföra / testa en input för att avkolla om den ingår med det som behövs för att en email ska vara correct detta gör man genom att hämta strängen man vill testa och skriva följande kod
  
if(emailRegexp.test(email) == "true eller false"{

  Vad man vill ska hända beroende på om det är sant eller falskt
  
}

Detta använder jag som en sista koll innan jag skickar vidare använadren till andra sidan


    if (emailRegexp.test(email) == true){
        window.location.replace("sida2.html");
    }


Denna kod användes för att köra testet på email och om det kommer ut efter standarden "true" så skickar den användaren till /sida2.html


Eftersom att tree funktioner efterfrågades delade jag upp validerings processen till tre olika funktioner : Validering av användarnamn, Validering samt jämnförrelse av lösenord
och validering av email

Dessa är nämnda validering 1-3

||||

HTML Validering 
||||
...
||||
