var hah = 5;
var cah = 5;

function getColor(value) {
    if (value >= 4) {
        return "#02e702";
    } else {
        if (value >= 3) {
            return "orange";
        } else {
            return "red";
        }
    }
}

function HPBar() {
    var HM = document.getElementById("HBar");
    var CM = document.getElementById("CBar");
    var widthC = cah * 20;
    var widthH = hah * 20;

    CM.style.width = widthC + '%';
    HM.style.width = widthH + '%';
    CM.style.backgroundColor = getColor(cah);
    HM.style.backgroundColor = getColor(hah);

}


function computerChoice() {
    let value = Math.floor((Math.random() * 10));
    console.log(value);
    return value % 3;
}


function attack(hchoice) {
    var cChoice = computerChoice();
    alert("CcHOICE : " + cChoice);
    if (hchoice == cChoice) {
        HPBar();
    } else {
        if (cChoice == 0) {
            if (hchoice == 2) {
                cah--;
                HPBar();
            } else {
                hah--;
                HPBar();
            }

        } else {
            if (cChoice == 1) {
                if (hchoice == 0) {
                    cah--;
                    HPBar();
                } else {
                    hah--;
                    HPBar();
                }
            } else {
                if (cChoice == 2) {
                    if (hchoice == 1) {
                        cah--;
                        HPBar();
                    } else {
                        hah--;
                        HPBar();
                    }

                }
            }
        }
    }
}

function getWinner(){
    Obj=document.body;
    let div=document.createElement('div');
    div.
}

var completegame=setInterval(function() {
    if(cah==0 || hah==0){
        getWinner();
        clearInterval(completegame);    
    }
    }, 1000);