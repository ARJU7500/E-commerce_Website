let siup= document.getElementById("lg");
let icn= document.getElementById("icn");
let reg= document.getElementById("regn");

lg.addEventListener("click", function()
{
    document.querySelector("#popup").style.display="flex";
})
icn.addEventListener("click", function()
{
    document.querySelector("#popup").style.display="none";
})
reg.addEventListener("click", function()
{
    document.querySelector("#popup").style.display="none";
})

function myFunction(x) {
    x.classList.toggle("fa fa-toggle-off");
  }