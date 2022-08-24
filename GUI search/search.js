
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;

        if (global_id > 0) {
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

function rule(elem) {
  return elem > 2 ? 1 : 0;
}

// ?????

// $( ".selected" ).each(function(index) {
//   $(this).on("click", function(){
//       // For the boolean value
//       var boolKey = $(this).data('selected');
//       // For the mammal value
//       var mammalKey = $(this).attr('id'); 
//   });
// });

// $( ".oblast2" ).each(function(index) {
//   $(this).on("click", function(){
//     console.log(index + 1);
//     this.style.backgroundColor = "red";
//   });
// });


var all_filters = [];
var global_id = 1;


$( ".filter" ).each(function(index) {
  $(this).on("change" , function(){

    console.log(index + 1);

    all_filters["id"] = index + 1;

    global_id = rule(all_filters["id"]);

    console.log(all_filters);

    this.style.color = "red";

    $(".filter").not(this).prop("checked", false);

    myFunction();

    return global_id;
  });
});

$( '.filter2' ).each(function(index) {
  $(this).on('change' , function(){

    console.log(index + 1);

    all_filters["tag"] = index + 1;

    console.log(all_filters);

    this.style.color = 'red';

    $('.filter2').not(this).prop('checked', false);

  });
});

var last_index = -1;

$( "tr" ).each(function(index) {
  $(this).on("click", function(){
    console.log(index);
    if (last_index != -1) {
// ======================================
      $( "tr" ).eq(last_index).css( "background", "green");
      this.style.background = "red";
      last_index = index;
    } else {
      this.style.background = "red";
      last_index = index;
    }

  });
});