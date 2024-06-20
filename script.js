let resultImg = document.querySelector(".result image"); 
let resultText = document.querySelector(".result");
let buttonOne = document.querySelector("#btn1");
let buttonTwo = document.querySelector("#btn2");
let buttonThree = document.querySelector("#btn3");
let buttonFour = document.querySelector("#btn4");
let que1 = document.querySelector(".question-1");
let que2 = document.querySelector(".question-2");
let choices;
let choices2;

buttonOne.addEventListener("click", function(){
    choices = 1
    que1.style.display='none'
    que2.style.display='grid'
});

buttonTwo.addEventListener("click", function(){
    choices = 2
    que1.style.display='none'
    que2.style.display='grid'
});

buttonThree.addEventListener("click", function(){
    choices2 = 3
    que1.style.display='none'
    que2.style.display='none'
    resultText.style.display='block'
    if (choices=== 1 && choices2===3){
        resultText.innerHTML = "You got Edgedancer, the doctors and samaritans.";
    }else if (choices=== 2 && choices2===3){
        resultText.innerHTML = "You got Willshaper, the patrons of self-expression.";
    }else if (choices=== 1 && choices2===4){
        resultText.innerHTML = "You got Skybreaker, the enforcers of law.";
    }else if (choices=== 2 && choices2===4){
        resultText.innerHTML = "You got Windrunner, the knights and protectors.";
    }
});

buttonFour.addEventListener("click", function(){
    choices2 = 4
    que1.style.display='none'
    que2.style.display='none'
    resultText.style.display='block'
    if (choices=== 1 && choices2===3){
        resultText.innerHTML = "You got Edgedancer, the doctors and samaritans.";
    }else if (choices=== 2 && choices2===3){
        resultText.innerHTML = "You got Willshaper, the patrons of self-expression.";
    }else if (choices=== 1 && choices2===4){
        resultText.innerHTML = "You got Skybreaker, the enforcers of law.";
    }else if (choices=== 2 && choices2===4){
        resultText.innerHTML = "You got Windrunner, the knights and protectors.";
    }
});



