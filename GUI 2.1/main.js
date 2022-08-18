

const button = document.getElementById("eee");
var flag = false;

var sort = document.getElementsByClassName("sort");
button.addEventListener("click", e => {
  console.log(e)
  if (flag === false) {
    flag = true;
    document.getElementById("try_to_hide").style.height = 0 + "vh";
    document.getElementById("try_to_hide").style.marginTop = 0;
    document.getElementById("tth2").style.opacity = 1;
    // document.getElementById("tth2").style.display = "block";
  } else {
    flag = false;
    document.getElementById("try_to_hide").style.height = 40 + "vh";
    document.getElementById("try_to_hide").style.marginTop = 1.5 + "%";
    document.getElementById("tth2").style.opacity = 0;
  }
//   document.getElementById("try_to_hide").style.display = "none";
});
// document.getElementById("eee")
//         .addEventListener("click", () => {

// }, false);