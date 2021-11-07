 var xhr = new XMLHttpRequest();

 //console.log(xhr.readyState); // --> 0  UNSENT = 0

 xhr.open("GET", "o-nas.html", true); // otwieranie połączenia

 //console.log(xhr.readyState); // -->  OPENED = 1


 xhr.onreadystatechange = function(e) {
    if(this.readyState===4 && this.status===200){ // jeżeli poprawnie odebrano dane, serwer odesłał status 200
        console.log(this.response);               // wyświetl w consollog strukturę html strony o-nas.html
    }

 };

function logType(e){  //przyjmuje event
    console.log(e.type);  // wyświetla w console.log typ eventu
}

//xhr.timeout=1; deklarowane przed send ile czasu mamy czekać na odpowiedź z serwera w milisekundach po tym czasie będzie przerwanie wysyłania

xhr.onloadstart = logType; // początek wczytywania

xhr.onprogress = logType; // w trakcie, może się wywołać kilka razy

xhr.onabort = logType; // przerwanie - stosowane po send

xhr.onerror = logType; // gdy pojawi się jakiś błąd - wysyłka pod nieistniejący serwe

xhr.onload = logType; // gdy wszystko się wczyta

xhr.ontimeout = logType; //deklarowane przed send ile czasu mamy czekać na odpowiedź z serwera w milisekundach po tym czasie będzie przerwanie wysyłania

xhr.onloadend = logType; // koniec




 xhr.send(null); //wysłanie żądania .send(null) jest opcjonalny może być .send()

 //xhr.abort();



 //console.log(xhr.response);

//console.log("Hello");

 /*
 UNSENT = 0
 OPENED = 1
 HEADERS_RECEIVED = 2
 LOADING = 3
 DONE = 4
 */ 