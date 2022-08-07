let contador = 50

window.addEventListener('keydown' , function (e) {
    if(e.key === "ArrowRight" && contador<=1300){
        let mario = document.getElementById('mario');
        mario.style.marginLeft= contador +"px";
        mario.style.transform="scaleX(1)";
    }
    if(e.key === "ArrowLeft" && contador<=1300){
        let mario = document.getElementById('mario');
        mario.style.transform="scaleX(-1)";
    }

    if(e.key === "ArrowUp" && contador<=1300){
        let mario = document.getElementById('mario');
        mario.style.animation="jump 1s";
    }
    if(e.key === "ArrowDown" && contador<=1300){
        let mario = document.getElementById('mario');
        mario.style.animation="";
    }
    
    contador=contador+50;
    
} );
