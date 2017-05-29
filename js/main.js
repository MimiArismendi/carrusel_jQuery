$(document).ready(function(){
    $("#btnUno").click(function(){
        $("#imgUno").css('display','block');
        $("#imgDos").css('display','none');
        $("#imgTres").css('display','none');
        $("#imgCuatro").css('display','none');
        $("#imgCinco").css('display','none');  
    })
    


    $("#btnDos").click(function(){
        $("#imgUno").css('display','none');
        $("#imgDos").css('display','block');
        $("#imgTres").css('display','none');
        $("#imgCuatro").css('display','none');
        $("#imgCinco").css('display','none');
    });

    $("#btnTres").click(function(){
        $("#imgUno").css('display','none');
        $("#imgDos").css('display','none');
        $("#imgTres").css('display','block');
        $("#imgCuatro").css('display','none');
        $("#imgCinco").css('display','none');
    });

    $("#btnCuatro").click(function(){
        $("#imgUno").css('display','none');
        $("#imgDos").css('display','none');
        $("#imgTres").css('display','none');
        $("#imgCuatro").css('display','block');
        $("#imgCinco").css('display','none');
    });

    $("#btnCinco").click(function(){
        $("#imgUno").css('display','none');
        $("#imgDos").css('display','none');
        $("#imgTres").css('display','none');
        $("#imgCuatro").css('display','none');
        $("#imgCinco").css('display','block');
    });

});























//var btn1 = document.getElementById("btnUno");
//    btn1.addEventListener("click",mostrar1);
//var btn2 = document.getElementById("btnDos");
//    btn2.addEventListener("click",mostrar2);
//var btn2 = document.getElementById("btnTres");
//    btn3.addEventListener("click",mostrar3);
//var btn4 = document.getElementById("btnCuatro");
//    btn4.addEventListener("click",mostrar4);
//var btn5 = document.getElementById("btnCinco");
//    btn5.addEventListener("click",mostrar5);
//
//var img1 = document.getElementById("imgUno");
//var img2 = document.getElementById("imgDos");
//var img3 = document.getElementById("imgTres");
//var img4 = document.getElementById("imgCuatro");
//var img5 = document.getElementById("imgCinco");
//
//function mostrar1(){
//    img1.style.display = "block";
//    img2.style.display = "none";
//    img3.style.display = "none";
//    img4.style.display = "none";    
//    img5.style.display = "none";
//}
//
//function mostrar2(){
//    img1.style.display = "none";
//    img2.style.display = "block";
//    img3.style.display = "none";
//    img4.style.display = "none";    
//    img5.style.display = "none";
//}
//
//function mostrar3(){
//    img1.style.display = "none";
//    img2.style.display = "none";
//    img3.style.display = "block";
//    img4.style.display = "none";    
//    img5.style.display = "none";
//}
//
//function mostrar4(){
//    img1.style.display = "none";
//    img2.style.display = "none";
//    img3.style.display = "none";
//    img4.style.display = "block";    
//    img5.style.display = "none";
//}
//
//function mostrar5(){
//    img1.style.display = "none";
//    img2.style.display = "none";
//    img3.style.display = "none";
//    img4.style.display = "none";    
//    img5.style.display = "block";
//}