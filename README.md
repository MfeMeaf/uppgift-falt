# uppgift-falt
Documentation "Vad som används och varför"
Bootstrap: För att det gör livet enklare.
"Bootstrap användes endast för knappens utseende"
const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
  Detta är ett objkt kod  "Regular expression" som man kan använda för att jämnföra / testa en input för att avkolla om den ingår med det som behövs för att en email ska vara correct detta gör man genom att hämta strängen man vill testa och skriva följande kod
if(emailRegexp.test(email) == "true eller false"{
  Vad man vill ska hända beroende på om det är sant eller falskt
}
med detta kan man testa om en email är rätt och skicka en viadre till en hemsida eller skriva en text som säger att email formatet är fel.
