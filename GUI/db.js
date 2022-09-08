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

$(document).ready(function() {
  $('#testbtn').click(function() {
      var data_my = $('#textfield').val();
      alert(data);
      $.post("new.php",
      {
        test: data_my,
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
  });
});