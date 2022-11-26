
var images = document.querySelector('.images');

images.addEventListener('mouseover', onestar);
images.addEventListener('mouseout', nostar);

function nostar()
{
   document.getElementById("one1").src="./star-off.png";
   document.getElementById("two2").src="./star-off.png";
   document.getElementById("three3").src="./star-off.png";
   document.getElementById("four4").src="./star-off.png";
   document.getElementById("five5").src="./star-off.png";
}

function onestar()
{
    nostar();
    document.getElementById("one1").src="./star-on.png";
}
function twostar()
{
    nostar();
    document.getElementById("one1").src="./star-on.png";
    document.getElementById("two2").src="./star-on.png";
}
function threestar()
{
    nostar();
    document.getElementById("one1").src="./star-on.png";
    document.getElementById("two2").src="./star-on.png";
    document.getElementById("three3").src="./star-on.png";
}
function threestar3()
{
    nostar();
    document.getElementById("one1").src="./star-on.png";
    document.getElementById("two2").src="./star-on.png";
    document.getElementById("three3").src="./star-on.png";
}
function fourstar()
{
    nostar();
    document.getElementById("one1").src="./star-on.png";
    document.getElementById("two2").src="./star-on.png";
    document.getElementById("three3").src="./star-on.png";
    document.getElementById("four4").src="./star-on.png";   
}
function fivestar()
{
    document.getElementById("one1").src="./star-on.png";
    document.getElementById("two2").src="./star-on.png";
    document.getElementById("three3").src="./star-on.png";
    document.getElementById("four4").src="./star-on.png";
    document.getElementById("five5").src="./star-on.png"
}

