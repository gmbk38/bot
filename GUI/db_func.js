function test(){
    $.ajax(
        'data.php',
        {
            success: function(data) {
              alert('AJAX call was successful!');
              alert('Data from the server' + data);
            },
            error: function() {
              alert('There was some error performing the AJAX call!');
            }
         }
      );``
}

var arr = [1,2,3,4,5];

$(document).ready(function() {
  $('#testbtn').click(function() {
      var data_my = $('#textfield').val();
      alert(data_my);
      $.post("new.php",
      {
        test: data_my,
        el : arr,
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });

      // $.get( "data.php", function( row ) {
      //   var test_for_show = row;
      //   console.log(test_for_show);
      //   console.log(test_for_show.nodeName);
      //   test_for_show = test_for_show.toString();
      //   console.log(test_for_show.nodeName);
      // });
  });
});

export function update(selected_cells, updated_cells) {
    $.post("update.php",
    {
      exid : selected_cells[0],
      id : updated_cells[0],
      extag : selected_cells[1],
      tag : updated_cells[1],
      exq : selected_cells[2],
      q : updated_cells[2],
      exa : selected_cells[3],
      a : updated_cells[3],
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
}