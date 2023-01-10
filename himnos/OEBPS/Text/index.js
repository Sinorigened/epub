const imageContainerE1 = document.querySelector(".image-container");

const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x = 0;
let timer;
prevE1.addEventListener("click",()=>{
    x= x + 45;
    clearTimeout(timer);
    updateGallery();
});

nextE1.addEventListener("click",()=>{
    x= x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerE1.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`/** el signo de dolar es con 
                                            lo que se añade una variable 
                                            y se coloca la variable entre 
                                            los braces; después de ellos
                                            se coloca el tipo de variable;
                                            en este caso son grados (deg)*/
    timer = setTimeout(()=>{
        x = x -45
        updateGallery();

    }, 3000);


};

updateGallery(); /** si no aparece está indicación aquí, 
                    no correrá como debe en ninguna de las
                    llamadas que tiene en todas las variables*/

