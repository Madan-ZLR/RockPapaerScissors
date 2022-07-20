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
    if (hchoice == cChoice) {
        HPBar();
    } else {
        if (cChoice == 0) {
            if (hchoice == 2) {
                cah--;
                HPBar();
                if (cah == 0 || hah == 0) {
                  
                    getWinner();

                }
            } else {
                hah--;
                HPBar();
                if (cah == 0 || hah == 0) {
                   
                    getWinner();

                }
            }

        } else {
            if (cChoice == 1) {
                if (hchoice == 0) {
                    cah--;
                    HPBar();
                    if (cah == 0 || hah == 0) {
                        
                        getWinner();

                    }
                } else {
                    hah--;
                    HPBar();
                    if (cah == 0 || hah == 0) {
                       
                        getWinner();

                    }
                }
            } else {
                if (cChoice == 2) {
                    if (hchoice == 1) {
                        cah--;
                        HPBar();
                        if (cah == 0 || hah == 0) {
                            
                            getWinner();

                        }
                    } else {
                        hah--;
                        HPBar();
                        if (cah == 0 || hah == 0) {
                            
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
    var h3=document.createElement('h3');
    h3.innerHTML='<a href="./Home.html" target="blank">Try Again</a>';
    var gret = document.querySelector('#winner h2');
    if (cah == 0) {
        alert("called");
        h1.innerHTML = "BooYah....";
        document.getElementById('winnerimg').src = "./images/manlogo.png";
        gret.innerHTML = "Congratulation Human Wons this FIGHT";
        div.appendChild(h1);
        div.appendChild(gret);
        div.appendChild(h3);
        div.style.display="block";
    } else {
        alert("called");
        h1.innerHTML = "Failed";
        document.getElementById('winnerimg').src ="./images/mancrying.jpg";
        gret.innerHTML = "Better Luck Next Time !";
        div.appendChild(h1);
        div.appendChild(gret);
        div.appendChild(h3);
        div.style.display="block";
    }
}