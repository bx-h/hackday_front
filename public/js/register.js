var USERNAME = /^[a-zA-Z]\w{5,17}$/;
var ID = /^[1-9][0-9]{7}$/;
var PHONE = /^[1-9][0-9]{10}$/;
var EMAIL = /^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,4}$/;
var PASSWORD = /[a-zA-Z_\-]{6,12}/;
$('.notice').hide();

$('#username').change(function() {
  if (USERNAME.test($('#username').val()) == false) {
    $('#tipname').show();
  }
  else {
    $('#tipname').hide();
  }
});

$('#id').change(function() {
  if (ID.test($('#id').val()) == false) {
    $('#tipid').show()
  }
  else {
    $('#tipid').hide();
  }
});

$('#password').change(function() {
  if (PASSWORD.test($('#password').val()) == false) {
    $('#tippassword').show()
  }
  else {
    $('#tippassword').hide();
  }
});

$('#email').change(function() {
  if (EMAIL.test($('#email').val()) == false) {
    $('#tipemail').show()
  }
  else {
    $('#tipemail').hide();
  }
});


$('#password2').change(function() {
  if ($('#password2').val() != $('#password').val()) {
    $('#tippassword2').show()
  }
  else {
    $('#tippassword2').hide();
  }
});