
window.onload = function(){
    var b1 = document.getElementsByClassName("photo-master");
    var b2 = document.getElementsByClassName("menu-header-lena");
    b1.parentNode.insertBefore(b2, b1);
}