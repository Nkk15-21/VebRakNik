//rand img from massiv
function randomPilt(){
    const pildid=[
        '../mõstatus/img/r1.jpg',
        '../mõstatus/img/r2.jpg',
        '../mõstatus/img/r3.jpg'
    ];
    //random img
    const pilt=Math.floor(Math.random()*pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src = rpilt;
}

//****************************************************************************************\\

function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //несколько элементов с именем валик
    let randomPilt=document.getElementById("randomPilt");

    for (let i = 0; i < valik.length; i++){
        if (valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="Õige!";
                vastus.style.backgroundColor="green";
            } else {
                vastus.innerHTML="Vale!";
                vastus.style.backgroundColor="red";
            }
        }
    }

}

//****************************************************************************************\\

    function arvuta(kogus, hind){
        return(kogus*hind).toFixed(1);
        //toFixed(1) - one symb in after coma
    }

    const pilt1hind=50;
    const pilt2hind=130;
    const pilt3hind=9;

    function radioHindArv(){
        let vastus2=document.getElementById("vastus2");
        let pilt1=document.getElementById("pilt1");
        let pilt2=document.getElementById("pilt2");
        let pilt3=document.getElementById("pilt3");

        let kogus=document.getElementById("kogus");
        if(pilt1.checked){
            vastus2.innerHTML=arvuta(kogus.value, pilt1hind);
        } else if (pilt2.checked){
            vastus2.innerHTML=arvuta(kogus.value, pilt2hind);
        } else if (pilt3.checked){
            vastus2.innerHTML=arvuta(kogus.value, pilt3hind);
        } else {
            vastus2.innerHTML="Vali, mis pilti sa soovid!"
        }

}