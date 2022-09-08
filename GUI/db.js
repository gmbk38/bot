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

      $.get( "data.php", function( row ) {
        var test_for_show = row;
        console.log(test_for_show);
        console.log(test_for_show.nodeName);
        test_for_show = String(test_for_show);
        console.log(test_for_show.nodeName);
      });
  });
});