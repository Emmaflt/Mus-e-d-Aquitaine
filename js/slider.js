window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
    console.log(window.pageYOffset);
    image.style
}