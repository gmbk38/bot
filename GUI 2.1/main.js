

const button = document.getElementById("hide_btn");
var flag = false;

var sort = document.getElementsByClassName("sort");
button.addEventListener("click", e => {
  // console.log(e)
  if (flag === false) {
    flag = true;
    document.getElementById("try_to_hide").style.height = 0 + "vh";
    document.getElementById("try_to_hide").style.width = 0 + "vw";
    document.getElementById("try_to_hide").style.marginTop = 0;
    document.getElementById("try_to_hide").style.left = 13.5 + "vw";
    document.getElementById("try_to_hide").style.padding = 0;

    document.getElementById("left").style.left = 2.5 + "px";
    document.getElementById("right").style.left = 7.5 + "px";
    // Меняем верхние 2 местами
  } else {
    flag = false;
    document.getElementById("try_to_hide").style.height = 40 + "vh";
    document.getElementById("try_to_hide").style.width = 70 + "vw";
    document.getElementById("try_to_hide").style.marginTop = 1.5 + "%";
    document.getElementById("try_to_hide").style.left = 50 + "%";
    document.getElementById("try_to_hide").style.padding = 1.5 + "vw";

    document.getElementById("left").style.left = 7 + "px";
    document.getElementById("right").style.left = 3 + "px";
    // С этими
  }
//   document.getElementById("try_to_hide").style.display = "none";
});
// document.getElementById("eee")
//         .addEventListener("click", () => {

// }, false);

const checkbox = document.getElementById("theme");

// --bg-ultra-light: #eef4ff;
// --bg-light: #b4ceff;
// --bg-dark: #6babff;
// --headline: #3a8fff;
// --text: #003c8a;
// --border: #0056c7;
// --main-bg: white;
// --table-text: black;

// --dark-fade: linear-gradient(90deg, var(--headline), var(--text));
// --light-fade: linear-gradient(90deg, var(--headline), var(--border));

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.style.setProperty('--bg-ultra-light', '#002555');
    document.body.style.setProperty('--bg-light', '#0b111a');
    document.body.style.setProperty('--headline', 'white');
    document.body.style.setProperty('--text', '#44648f');
    document.body.style.setProperty('--border', '#002453');
    document.body.style.setProperty('--main-bg', '#001735');
    document.body.style.setProperty('--table-text', 'white');
    document.body.style.setProperty('--light-fade', 'linear-gradient(90deg, var(--main-bg), var(--bg-dark))');
    document.body.style.setProperty('--dark-fade', 'linear-gradient(270deg, var(--main-bg), var(--bg-dark))');
  } else {
    document.body.style.setProperty('--bg-ultra-light', '#eef4ff');
    document.body.style.setProperty('--bg-light', '#b4ceff');
    document.body.style.setProperty('--headline', '#3a8fff');
    document.body.style.setProperty('--text', '#003c8a');
    document.body.style.setProperty('--border', '#0056c7');
    document.body.style.setProperty('--main-bg', 'white');
    document.body.style.setProperty('--table-text', 'black');
    document.body.style.setProperty('--light-fade', 'linear-gradient(90deg, var(--headline), var(--text))');
    document.body.style.setProperty('--dark-fade', 'linear-gradient(90deg, var(--headline), var(--border))');
  }
});