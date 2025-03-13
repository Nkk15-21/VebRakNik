
function red(){ // color of text - orange
    $('h1').css('color', 'red');
}
function must() { // color of text - black
    $('h1').css('color', 'black');
}

function violet(){ // color of text - green
    $('h2').css('color', 'darkviolet');
}
function black(){ // color of text - green
    $('h2').css('color', 'black');
}



function  start(){

    $('h1').mouseenter(red); //  мышка на сайте
    $('h1').mouseleave(must); // мышка не на сайте

    $('h2').mouseenter(violet); // мышка на сайте
    $('h2').mouseleave(black); // мышка не на сайте

    $('#info').draggable();
    $('#info').ready(function(){
         $("#flip").click(function(){
            $("#panel").slideToggle("slow");
         });
    });

}
