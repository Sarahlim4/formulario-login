const sobras = [];
const acertos = [];

const number = new Array(1,2,3,4);

number1 = number[0];
number2 = number[1];
number3 = number[2];
number4 = number[3];

const palpite = new Array(1,2,3,4);

palpite1 = palpite[0];
palpite2 = palpite[1];
palpite3 = palpite[2];
palpite4 = palpite[3];

if(number1 === palpite1){
    var pos1 = "1"
    acertos.push(number[0]);
    sobras.push("1");
}

if(number2 === palpite2){
    var pos2 = "1"
    acertos.push(number[1]);
    sobras.push("1");
}

if(number3 === palpite3){
    var pos3 = "1"
    acertos.push(number[2]);
    sobras.push("1");
}

if(number4 === palpite4){
    var pos4 = "1"
    acertos.push(number[3]);
    sobras.push("1");
}

for(var i=0; i<number.length; i++) {
    if(number.indexOf(acertos[i]) > -1) {
        number.splice(acertos[i]);
    }
}


for(var i=0; i<number.length; i++) {
    if(palpite.indexOf(number[i]) > -1) {
        sobras.push("0");
    }
}





if(acertos == palpite){
    console.log("Você acertou a combinação")
}else{
    console.log(number.length);
}

