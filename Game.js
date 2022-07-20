var hah = 5;
var cah = 5;
var attacks = 5;
var weapons=["./images/scissorslogo.jpg","./images/paperlogo.jpg","./images/stone1logo.jpg"];
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
    CM.innerHTML = "HP - " + widthC + "%";
    HM.innerHTML = "HP - " + widthH + "%";
    CM.style.width = widthC + '%';
    HM.style.width = widthH + '%';
    CM.style.backgroundColor = getColor(cah);
    HM.style.backgroundColor = getColor(hah);
    document.getElementById('LA').innerHTML = "Left Attacks : " + attacks;

}


function computerChoice() {
    let value = Math.floor((Math.random() * 10));
    console.log(value);
    return value % 3;
}

function getWeaponani(H,C){
   document.getElementById('hwapon').src=weapons[H];
   document.getElementById('cwapon').src=weapons[C];
   document.getElementById('Hani').className="hani";
   document.getElementById('Cani').className="cani";
   document.getElementById('hwapon').classList.remove('hani');
   document.getElementById('cwapon').classList.remove('cani');
}



function attack(hchoice) {
    var cChoice = computerChoice();
    getWeaponani(hchoice,cChoice);
    if (hchoice == cChoice) {
        attacks--;
        HPBar();
    } else {
        if (cChoice == 0) {
            if (hchoice == 2) {
                cah--;
                attacks--;
                HPBar();
                if (attacks == 0) {
                    getWinner();
                }
            } else {
                hah--;
                attacks--;
                HPBar();
                if (attacks == 0) {
                    getWinner();
                }
            }

        } else {
            if (cChoice == 1) {
                if (hchoice == 0) {
                    cah--;
                    attacks--;
                    HPBar();
                    if (attacks == 0) {
                        getWinner();
                    }
                } else {
                    hah--;
                    attacks--;
                    HPBar();
                    if (attacks == 0) {
                        getWinner();
                    }
                }
            } else {
                if (cChoice == 2) {
                    if (hchoice == 1) {
                        cah--;
                        attacks--;
                        HPBar();
                        if (attacks == 0) {
                            getWinner();
                        }
                    } else {
                        hah--;
                        attacks--;
                        HPBar();
                        if (attacks == 0) {
                            getWinner();
                        }
                    }

                }
            }
        }
    }
}

function getWinner() {

    let div = document.getElementById('winner');
    var h1 = document.querySelector('#winner h1');
    var h3 = document.createElement('h3');
    h3.innerHTML = '<a href="./Home.html" target="blank">Try Again</a>';
    var gret = document.querySelector('#winner h2');
    if (hah > cah) {
        h1.innerHTML = "BooYah....";
        document.getElementById('winnerimg').src = "./images/manwinlogo.jpg";
        gret.innerHTML = "Congratulation Human Wons this FIGHT";
        div.appendChild(h1);
        div.appendChild(gret);
        div.appendChild(h3);
        div.style.display = "block";
    } else {
        if (cah > hah) {
           
            h1.innerHTML = "Failed";
            document.getElementById('winnerimg').src = "./images/mancrying.jpg";
            gret.innerHTML = "Better Luck Next Time !";
            div.appendChild(h1);
            div.appendChild(gret);
            div.appendChild(h3);
            div.style.display = "block";
        } else {
            h1.innerHTML = "Game Tied";
            document.getElementById('winnerimg').src = "./images/tie.jpg";
            gret.innerHTML = "Human and Both can Survive in This World !";
            div.appendChild(h1);
            div.appendChild(gret);
            div.appendChild(h3);
            div.style.display = "block";
        }
    }
}