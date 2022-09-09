function update1(selected_cells, updated_cells) {
  $.post("update.php",
  {
    exid : selected_cells["id"],
    id : updated_cells["id"],
    extag : selected_cells["tag"],
    tag : updated_cells["tag"],
    exq : selected_cells["q"],
    q : updated_cells["q"],
    exa : selected_cells["a"],
    a : updated_cells["a"],
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}

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
    document.getElementById("try_to_hide").style.height = 25 + "vh";
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
// --red-btn: #a00000;

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

// SEARCH PART ++++++++++++++++++++++++++=


function SortById() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("sort_id");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td && $(td).css("display") != "none") {
      txtValue = td.textContent || td.innerText;

      if (global_id == 0) {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } else {
        if (!(txtValue.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }       
  }
}

function SortByTag() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("sort_tag");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td && $(td).css("display") != "none") {
      txtValue = td.textContent || td.innerText;

      if (global_tag == 0) {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } else {
        if (!(txtValue.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }       
  }
}

function SortByQ() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("sort_q");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td && $(td).css("display") != "none") {
      txtValue = td.textContent || td.innerText;

      if (global_q == 0) {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } else {
        if (!(txtValue.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }       
  }
}

function SortByA() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("sort_a");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td && $(td).css("display") != "none") {
      txtValue = td.textContent || td.innerText;

      if (global_a == 0) {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } else {
        if (!(txtValue.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }       
  }
}

var all_filters = [];
var global_id = 0;
var global_tag = 0;
var global_q = 0;
var global_a = 0;


$( ".filter" ).each(function(index) {
$(this).on("change" , function(){

  // console.log(index);

  all_filters["id"] = index;

  global_id = all_filters["id"];

  // console.log(all_filters);
  // console.log(global_id);

  $(".filter").not(this).prop("checked", false);

  SortById();
});
});

$( ".filter2" ).each(function(index) {
  $(this).on("change" , function(){
  
    // console.log(index);
  
    all_filters["tag"] = index;
  
    global_tag = all_filters["tag"];
  
    // console.log(all_filters);
    // console.log(global_id);
  
    // this.style.color = "red";
  
    $(".filter2").not(this).prop("checked", false);
  
    SortByTag();
  });
  });

$( ".filter3" ).each(function(index) {
  $(this).on("change" , function(){
  
    // console.log(index);
  
    all_filters["q"] = index;
  
    global_q = all_filters["q"];
  
    // console.log(all_filters);
    // console.log(global_id);
  
    // this.style.color = "red";
  
    $(".filter3").not(this).prop("checked", false);
  
    SortByQ();
  });
  });

$( ".filter4" ).each(function(index) {
  $(this).on("change" , function(){
  
    // console.log(index);
    
    all_filters["a"] = index;
  
    global_a = all_filters["a"];
  
    // console.log(all_filters);
    // console.log(global_id);
    
    // this.style.color = "red";
  
    $(".filter4").not(this).prop("checked", false);
    
    SortByA();
  });
});

var last_index = -1;
var selected_cells = [];
var updated_cells = [];

$( "tr" ).each(function(index) {
  // click dblclick ========================================
$(this).on("dblclick", function(){
  // console.log(index);
  if (last_index != -1) {
// ======================================
$( "tr" ).eq(last_index).css( "background" , "none");
    $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
    $(this).css( "background", "var(--light-fade)");
    last_index = index;
    tr = document.getElementsByTagName("tr");
    tr = tr[index];
    td = tr.getElementsByTagName("td");
    selected_cells["id"] = td[0].innerText || td[0].textContent;
    selected_cells["tag"] = td[1].innerText || td[1].textContent;
    selected_cells["q"] = td[2].innerText || td[2].textContent;
    selected_cells["a"] = td[3].innerText || td[3].textContent;
    // console.log(selected_cells);
    $( "#tid" ).val(selected_cells["id"]);
    $( "#ttag" ).val(selected_cells["tag"]);
    $( "#tq" ).val(selected_cells["q"]);
    $( "#ta" ).val(selected_cells["a"]);
    $("#delete_btn").css("display", "inline-block");
    $(".edit").css("display", "block");

  } else {
    $(this).css( "background", "var(--light-fade)");
    last_index = index;
    tr = document.getElementsByTagName("tr");
    tr = tr[index];
    td = tr.getElementsByTagName("td");
    selected_cells["id"] = td[0].innerText || td[0].textContent;
    selected_cells["tag"] = td[1].innerText || td[1].textContent;
    selected_cells["q"] = td[2].innerText || td[2].textContent;
    selected_cells["a"] = td[3].innerText || td[3].textContent;
    // console.log(selected_cells);
    $( "#tid" ).val(selected_cells["id"]);
    $( "#ttag" ).val(selected_cells["tag"]);
    $( "#tq" ).val(selected_cells["q"]);
    $( "#ta" ).val(selected_cells["a"]);
    $("#delete_btn").css("display", "inline-block");
    $(".edit").css("display", "block");
  }

});
});


// ==
// ==
// ==

$( "tr" ).each(function(index) {
  // click dblclick ========================================
$(this).on("click", function(){
  // console.log(index);
  if (last_index != -1) {
// ======================================
$( "tr" ).eq(last_index).css( "background" , "none");
    $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
    $(this).css( "background", "var(--light-fade)");
    last_index = index;
    tr = document.getElementsByTagName("tr");
    tr = tr[index];
    td = tr.getElementsByTagName("td");
    selected_cells["id"] = td[0].innerText || td[0].textContent;
    selected_cells["tag"] = td[1].innerText || td[1].textContent;
    selected_cells["q"] = td[2].innerText || td[2].textContent;
    selected_cells["a"] = td[3].innerText || td[3].textContent;
    // console.log(selected_cells);
    $( "#tid" ).val(selected_cells["id"]);
    $( "#ttag" ).val(selected_cells["tag"]);
    $( "#tq" ).val(selected_cells["q"]);
    $( "#ta" ).val(selected_cells["a"]);

  } else {
    $(this).css( "background", "var(--light-fade)");
    last_index = index;
    tr = document.getElementsByTagName("tr");
    tr = tr[index];
    td = tr.getElementsByTagName("td");
    selected_cells["id"] = td[0].innerText || td[0].textContent;
    selected_cells["tag"] = td[1].innerText || td[1].textContent;
    selected_cells["q"] = td[2].innerText || td[2].textContent;
    selected_cells["a"] = td[3].innerText || td[3].textContent;
    // console.log(selected_cells);
    $( "#tid" ).val(selected_cells["id"]);
    $( "#ttag" ).val(selected_cells["tag"]);
    $( "#tq" ).val(selected_cells["q"]);
    $( "#ta" ).val(selected_cells["a"]);
  }

});
});

// ==
// ==
// ==
  $( "tr" ).each(function(index) {
    $(this).on("dblclick", function(){
      // console.log(index);
      if (last_index != -1) {
    // ======================================
    $( "tr" ).eq(last_index).css( "background" , "none");
        $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
        $("#delete_btn").css("display", "inline-block");
        $(".edit").css("display", "block");
    
      } else {
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
        $("#delete_btn").css("display", "inline-block");
        $(".edit").css("display", "block");
      }

      $(window).scrollTop(0);
    
    });
    });

    // ==
    // ==
    // ==

    $( "tr" ).each(function(index) {
      // click dblclick ========================================
    $(this).on("click", function(){
      // console.log(index);
      if (last_index != -1) {
    // ======================================
    $( "tr" ).eq(last_index).css( "background" , "none");
        $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
    
      } else {
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
      }
    
    });
    });

function upd_for_new_tr() {
  
  $( "tr" ).each(function(index) {
    $(this).on("dblclick", function(){
      // console.log(index);
      if (last_index != -1) {
    // ======================================
    $( "tr" ).eq(last_index).css( "background" , "none");
        $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
        $("#delete_btn").css("display", "inline-block");
        $(".edit").css("display", "block");
    
      } else {
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
        $("#delete_btn").css("display", "inline-block");
        $(".edit").css("display", "block");
      }

      $(window).scrollTop(0);
    
    });
    });

    // ==
    // ==
    // ==

    $( "tr" ).each(function(index) {
      // click dblclick ========================================
    $(this).on("click", function(){
      // console.log(index);
      if (last_index != -1) {
    // ======================================
    $( "tr" ).eq(last_index).css( "background" , "none");
        $( "tr" ).eq(last_index).css( "background-color", "var(--bg-ultra-light)");
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
    
      } else {
        $(this).css( "background", "var(--light-fade)");
        last_index = index;
        tr = document.getElementsByTagName("tr");
        tr = tr[index];
        td = tr.getElementsByTagName("td");
        selected_cells["id"] = td[0].innerText || td[0].textContent;
        selected_cells["tag"] = td[1].innerText || td[1].textContent;
        selected_cells["q"] = td[2].innerText || td[2].textContent;
        selected_cells["a"] = td[3].innerText || td[3].textContent;
        // console.log(selected_cells);
        $( "#tid" ).val(selected_cells["id"]);
        $( "#ttag" ).val(selected_cells["tag"]);
        $( "#tq" ).val(selected_cells["q"]);
        $( "#ta" ).val(selected_cells["a"]);
      }
    
    });
    });
  
};

$(document).keyup(function(e){

  if(e.keyCode === 27)
      $(".edit").css("display", "none");

  if(e.keyCode === 46 && last_index != -1)
      $("tr").eq(last_index).css("display", "none");

});

var mark_upd = false

$( "#edit_btn" ).click(function() {
  $( "#tid" ).val("");
  $( "#ttag" ).val("");
  $( "#tq" ).val("");
  $( "#ta" ).val("");
  $("#delete_btn").css("display", "none");
  $(".edit").css("display", "block");
  mark_upd = true;
});

$( "#upd_btn" ).click(function() {
  if (mark_upd == true) {
    mark_upd = false;
    $("tr").last().after(
      "<tr>" +
        "<td>" + $("#tid").val() + " </td> " +
        "<td>" + $("#ttag").val() + " </td> " +
        "<td>" + $("#tq").val() + " </td> " +
        "<td>" + $("#ta").val() + " </td> " +
      "</tr>"
    );
    $(".edit").css("display", "none");
    upd_for_new_tr();
    add_data(selected_cells);
  } else {
  tr = document.getElementsByTagName("tr");
  tr = tr[last_index];
  td = tr.getElementsByTagName("td");
  td[0].innerText = $("#tid").val();
  td[1].innerText =$("#ttag").val();
  td[2].innerText =$("#tq").val();
  td[3].innerText =$("#ta").val();
  $(".edit").css("display", "none");
  }
  updated_cells["id"] = $("#tid").val();
  updated_cells["tag"] = $("#ttag").val();
  updated_cells["q"] = $("#tq").val();
  updated_cells["a"] = $("#ta").val();

  update(selected_cells, updated_cells);
});

var delete_flag = 0;

$( "#delete_btn" ).click(function() {
  if (delete_flag == 0) {
    delete_flag++;
    $("#MyAlert").css("display", "block");
  } else {
    delete_flag = 0;
    $("tr").eq(last_index).css("display", "none");
    $("#MyAlert").css("display", "none");
    $(".edit").css("display", "none");
    delete_data(selected_cells);
  }
});

$(document).ready(function() {
  main_data = [];
  $("input").each(function(index) {
    if (this.id == "data_load") {
      var element = $(this).val();
      element = String(element);
      element = element.split("_");
      main_data.push(element);
      $(this).remove();
    };
  });
  for (var i = 0; i < main_data.length; i++) {
    if (i < 50 || i > 60) {
      $("tr").last().after(
        "<tr>" +
          "<td>" + main_data[i][0] + " </td> " +
          "<td>" + main_data[i][1] + " </td> " +
          "<td>" + main_data[i][2] + " </td> " +
          "<td>" + main_data[i][3] + " </td> " +
        "</tr>"
      );
    }
  };
  upd_for_new_tr();
});

// function update(selected_cells, updated_cells) {
//   $.post("update copy.php",
//   {
//     test : selected_cells["id"],
//   },
//   function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });
// }

function update(selected_cells, updated_cells) {
  $.post("update.php",
  {
    exid : selected_cells["id"],
    id : updated_cells["id"],
    extag : selected_cells["tag"],
    tag : updated_cells["tag"],
    exq : selected_cells["q"],
    q : updated_cells["q"],
    exa : selected_cells["a"],
    a : updated_cells["a"],
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}

function delete_data(selected_cells) {
  $.post("delete.php",
  {
    exid : selected_cells["id"],
    extag : selected_cells["tag"],
    exq : selected_cells["q"],
    exa : selected_cells["a"],
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}

function add_data(selected_cells) {
  $.post("add.php",
  {
    id : selected_cells["id"],
    tag : selected_cells["tag"],
    q : selected_cells["q"],
    a : selected_cells["a"],
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}