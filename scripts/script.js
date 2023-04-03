const page_rules = document.querySelector(".page-rules");
const Score = document.querySelector("#score");
const page_resultat = document.querySelector(".resultat");
const img_house = document.querySelector("#img-house");
const img_you = document.querySelector("#img-you");
const resultat = document.querySelector("#resultat");
const box_house = document.querySelector("#box-house");
const box_you = document.querySelector("#box-you");
function OpenPageRules() {
    page_rules.style.visibility = "visible";
    page_rules.style.opacity = "1";
}
function ClosePageRules() {
    page_rules.style.visibility = "hidden";
    page_rules.style.opacity = "0";
}
var choix;
const tableau = ["feuille", "ciseau", "pierre", "feuille", "ciseau", "pierre"];
var score = 0;
var scoreRobot = 0;
function ChoiceFeuille() {
    choix = "feuille";
    box_you.style.borderColor = "#5470f5";
    var choix_tableau = Math.floor(Math.random() * tableau.length);
    img_you.src = "./images/icon-paper.svg";
    if (choix === tableau[choix_tableau]) {
        box_house.style.borderColor = "#5470f5";
        resultat.innerHTML = "EQUALITY";
        img_house.src = "./images/icon-paper.svg";
    }
    if (tableau[choix_tableau] === "ciseau") {
        box_house.style.borderColor = "#eba722";
        resultat.innerHTML = "YOU LOSE";
        img_house.src = "./images/icon-scissors.svg";
        scoreRobot++;
    }
    if (tableau[choix_tableau] === "pierre") {
        box_house.style.borderColor = "#df3b57";
        resultat.innerHTML = "YOU WIN"
        score++;
        img_house.src = "./images/icon-rock.svg";
    }
    Score.innerHTML = score;
    page_resultat.style.visibility = "visible";
    page_resultat.style.opacity = "1";
}
function ChoiceCiseau() {
    choix = "ciseau";
    box_you.style.borderColor = "#eba722";
    var choix_tableau = Math.floor(Math.random() * tableau.length);
    img_you.src = "./images/icon-scissors.svg";
    if (choix === tableau[choix_tableau]) {
        resultat.innerHTML = "EQUALITY";
        img_house.src = "./images/icon-scissors.svg";
        box_house.style.borderColor = "#eba722";
    }
    if (tableau[choix_tableau] === "feuille") {
        box_house.style.borderColor = "#5470f5";
        img_house.src = "./images/icon-paper.svg";
        resultat.innerHTML = "YOU WIN";
        score++;
    }
    if (tableau[choix_tableau] === "pierre") {
        box_house.style.borderColor = "#df3b57";
        resultat.innerHTML = "YOU LOSE";
        img_house.src = "./images/icon-rock.svg";
        scoreRobot++;
    }
    Score.innerHTML = score;
    page_resultat.style.visibility = "visible";
    page_resultat.style.opacity = "1";
}
function ChoicePierre() {
    choix = "pierre";
    box_you.style.borderColor = "#df3b57";
    var choix_tableau = Math.floor(Math.random() * tableau.length);
    img_you.src = "./images/icon-rock.svg";
    if (choix === tableau[choix_tableau]) {
        box_house.style.borderColor = "#df3b57";
        resultat.innerHTML = "EQUALITY";
        img_house.src = "./images/icon-rock.svg";
    }
    if (tableau[choix_tableau] === "feuille") {
        box_house.style.borderColor = "#5470f5";
        resultat.innerHTML = "YOU LOSE";
        img_house.src = "./images/icon-paper.svg";
        scoreRobot++;
    }
    if (tableau[choix_tableau] === "ciseau") {
        box_house.style.borderColor = "#eba722";
        resultat.innerHTML = "YOU WIN"
        score++;
        img_house.src = "./images/icon-scissors.svg";
    }
    Score.innerHTML = score;
    page_resultat.style.visibility = "visible";
    page_resultat.style.opacity = "1";
}
function PlayAgain() {
    page_resultat.style.visibility = "hidden";
    page_resultat.style.opacity = "0";
}