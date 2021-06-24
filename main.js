// Drop down menu
function dropDowMenu() {
    document.getElementById("dropdown").classList.toggle("dropdown__content--show");
}

window.onclick = function(e) {
    // console.log(e)
    if (!e.target.matches('.dropdown__button')) {
        var myDropdown = document.getElementById("dropdown");
        if (myDropdown.classList.contains('dropdown__content--show')) {
        myDropdown.classList.remove('dropdown__content--show');
        }
    }
}


//Chat box
function chatBox() {
    document.querySelector(".chat__hidden").classList.toggle("chat__show");
}
