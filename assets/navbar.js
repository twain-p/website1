function openNav() {
  document.getElementById("menu").style.width = "250px";
  //For changing opacity when opening:
  //document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  //document.body.style.backgroundColor = "white";
}

/*
For jQuery (not needed anymore)
$("document").ready(function() {
 $("#bars").click(function() {
   $("#menu").animate({width:'toggle'},350);
 });
});
*/
