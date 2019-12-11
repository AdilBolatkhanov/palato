$(document).ready(function(){
    $(".advButton").click(function(){
        $("#advContainer").toggle(1000);
    });
    
    $(".advButton1").click(function(){
        $("#advContainer1").fadeToggle(1000);
    });
    
    $(".advButton2").click(function(){
        $("#advContainer2").fadeTo(1000, 0.1);
    });
    
     $(".advButton3").click(function(){
        $("#advContainer3").slideToggle(3000);
    });
    
    $(".advButton4").click(function(){
        var div = $("#advContainer4");
        div.animate({left: '250px',
                    height: '+=130px',
                    width: '+=50px'}, 1000);
        div.animate({fontSize: '1.2em'}, 1000);
        
        $("#advPhoto").animate({width: "+=150px"},1000);
    });
    
    $('#stop').click(function(){
        $("#advContainer3").stop();
    });
    
    
});

