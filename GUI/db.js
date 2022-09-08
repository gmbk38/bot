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
      var data = $('#textfield').val();
      alert(data);
  });
});