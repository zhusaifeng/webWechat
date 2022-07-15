$(document).ready(function(){
    $("button").click(function(){
    $("div").fadeToggle(1000,function(){
        window.location.href="/main/main.html"
    })
    });
});