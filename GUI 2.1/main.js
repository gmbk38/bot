

const button = document.getElementById("eee");
var flag = false;

var sort = document.getElementsByClassName("sort");
button.addEventListener("click", e => {
  // console.log(e)
  if (flag === false) {
    flag = true;
    document.getElementById("try_to_hide").style.height = 0 + "vh";
    document.getElementById("try_to_hide").style.width = 0 + "vw";
    document.getElementById("try_to_hide").style.marginTop = 0;
    document.getElementById("try_to_hide").style.left = 10 + "vw";
    document.getElementById("try_to_hide").style.padding = 0;
  } else {
    flag = false;
    document.getElementById("try_to_hide").style.height = 40 + "vh";
    document.getElementById("try_to_hide").style.width = 70 + "vw";
    document.getElementById("try_to_hide").style.marginTop = 1.5 + "%";
    document.getElementById("try_to_hide").style.left = 50 + "%";
    document.getElementById("try_to_hide").style.padding = 1.5 + "vw";
  }
//   document.getElementById("try_to_hide").style.display = "none";
});
// document.getElementById("eee")
//         .addEventListener("click", () => {

// }, false);