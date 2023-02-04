for(var i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        var elementInnerHtml = this.innerHTML;
        playSound(elementInnerHtml);
        clickAnimation(elementInnerHtml);
    });
}

document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

document.addEventListener("keyup",function(event){
    endAnimation(event.key);
});

function playSound(elementInnerHtml){
    switch (elementInnerHtml) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "h":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(elementInnerHtml);
            break;
    }
}

function clickAnimation(keypressed){
    if(keypressed==="w"||keypressed==="s"||keypressed==="a"||keypressed==="h"||keypressed==="j"||keypressed==="k"||keypressed==="l"){
        var activeKey = document.querySelector("."+keypressed);
        activeKey.classList.add("pressed");
        setTimeout(function(){
            activeKey.classList.remove("pressed");
        },100);
    }else{
        console.log("press a proper key")
    }
}
function buttonAnimation(keypressed){
    if(keypressed==="w"||keypressed==="s"||keypressed==="a"||keypressed==="h"||keypressed==="j"||keypressed==="k"||keypressed==="l"){
        var activeKey = document.querySelector("."+keypressed);
        activeKey.classList.add("pressed");
    }else{
        console.log("press a proper key")
    }
}

function endAnimation(keyrelesed){
    if(keyrelesed==="w"||keyrelesed==="s"||keyrelesed==="a"||keyrelesed==="h"||keyrelesed==="j"||keyrelesed==="k"||keyrelesed==="l"){
        var end = document.querySelector("."+keyrelesed);
        end.classList.remove("pressed");
    }else{
        console.log("press a proper key")
    }
}

