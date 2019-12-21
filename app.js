const logo_div = document.getElementById("logo");
logo_div.addEventListener('click', function(){
    console.log("LOGO CLICKED!");
})

window.onscroll = function() {changeHeader()};
function changeHeader() {
  if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
    document.getElementById("tabs").className = "headerBG";
    document.getElementsByClassName("tab")[0].className = "tabBG";
  } else {
    document.getElementById("tabs").className = "";
    document.getElementsByClassName("tabBG")[0].className = "tab";
  }
}