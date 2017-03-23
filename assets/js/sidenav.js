function openNav() {
    document.getElementById('menuSideNav').style.width = "345px";
}
function closeNav() {
    document.getElementById("menuSideNav").style.width = "0"; 
}

function changeHeight() {
    var mainHeight = document.getElementById('dep-main').clientHeight;
    document.getElementById('menuSideNav').style.height =  mainHeight + 90 + "px";
}