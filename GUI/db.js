$.ajax(
    'request_ajax_data.php',
    {
        success: function(data) {
          alert('AJAX call was successful!');
          alert('Data from the server' + data);
        },
        error: function() {
          alert('There was some error performing the AJAX call!');
        }
     }
  );