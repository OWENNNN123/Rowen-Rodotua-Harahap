$(document).ready(function(){
    $('.mail').on('click',function(){
       window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here"; 
    });
});