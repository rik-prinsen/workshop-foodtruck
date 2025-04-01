document.querySelector('.verstuur').addEventListener('click', function(){
    let naam = document.querySelector('.naam').value;
    let tel = document.querySelector('.tel').value;
    let time = document.querySelector('#time').value;
    //Checkt of naam en tel wel gevuld zijn
    if(naam == "" || tel == "" || time == "--select--"){
        alert('Je moet de naam, het telefoonnummer en de tijd invullen');
        return;
    }else{
        let naamGerecht = '';
        let aantal = 0;
        //displays naam en tel
        document.querySelector('.bestelNaam').innerHTML += naam;
        document.querySelector('.bestelTel').innerHTML += tel;
        document.querySelector('.bestelTijd').innerHTML += time;
        console.log(Aantal_gerechten);
    }
});

//Gerechten
Aantal_gerechten = 0;
document.querySelector('.gerechtAdd').addEventListener('click',function(){
    let checkGerecht = document.querySelector('.gerechtAdd').checked;
    if(checkGerecht){
        //zet de naam en het aantal in variabelen
        naamGerecht = document.querySelector('#naamGerecht').value;
        aantal = document.querySelector('.aantalGerecht').value;
        Aantal_gerechten += parseInt(aantal);
        //displays het nieuwe gerecht
        document.querySelector('.bestelGerecht').innerHTML += naamGerecht + `(${aantal} stuks)<br>`;
        //leegt de tekstvelden
        document.querySelector('#naamGerecht').value = "Loaded fries";
        document.querySelector('.aantalGerecht').value = "";
        document.querySelector('.gerechtAdd').checked = null;
    }
});


const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

let m = (parseInt((minutes + 7.5)/15)*15)%60;
let h = minutes > 52 ? (hours === 23 ? 0 : ++hours) : hours;

console.log(currentTime.toLocaleTimeString());
console.log(h + ":" + m);
// const time = h + ":" + m;
kwart = 0;
for (let i = 0; i < 5; i++) {
    const time = h + ":" + (m+kwart);
    if(m+kwart == 60){
        h++;
        m = -15;
        let element = document.createElement('option');
        element.innerHTML = h+":"+m;
    }else{
        let element = document.createElement('option');
        element.innerHTML = time;
        document.querySelector('#time').append(element);
        kwart += 15;
    }
    
    
}
// let element = document.createElement('option');
// element.innerHTML = time;
// document.querySelector('#time').append(element);