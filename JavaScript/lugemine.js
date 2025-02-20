function puhasta(){

    let nimi = document.getElementById("nimi").value;
    let varv = document.getElementById("varv");
    let vastus= document.getElementById("vastus");
    let vastus2 = document.getElementById("vastus2");
    let vastus3 = document.getElementById("vastus3");
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let valik = document.getElementById("valik");
    let pilt=document.getElementById("pilt");

    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    valik.selectedIndex=0;
    nimi.value="";
    varv.value="black";
    jah.checked="";
    ei.checked="";
    pilt.src="";

}

function tekstLugemine(){
    //innerHTML -> генерирует ответ в месте id = vastus
    document.getElementById("vastus").innerHTML=
        'Tere päevast,' +
        document.getElementById("nimi").value;
}

function nuppVajutamine(){

    let vastus2 = document.getElementById("vastus2");
    let nimi = document.getElementById("nimi").value;
    let varv=document.getElementById("varv");

    vastus2.innerHTML="Sa tegid nuppu vajutamine "+nimi;
    vastus2.style.color=varv.value;
}

        //radio nupp vajutamine

function radioNupp(){
    let vastus3 = document.getElementById("vastus3");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let pilt=document.getElementById("pilt")

    if(jah.checked){
        vastus3.innerHTML="Sinu valik on "+jah.value;
        pilt.src="img/Anarhcy.png";
    }   else if(ei.checked){
        vastus3.innerHTML="Sinu valik on "+ei.value;
        pilt.src="img/Nimetu.png";
    }   else{
        vastus3.innerHTML="Sa pead midagi valima";
    }
}

function selectValik(){
    let vastus4=document.getElementById("vastus4");
    let valik=document.getElementById("valik");

    if(valik.selectedIndex!==0){
        //!==0 не нулевая строка
        vastus4.innerHTML="Sa oled valinud: "+valik.value;
    } else{
        vastus4.innerHTML="Palun kirjutage midagi: ";
    }
}