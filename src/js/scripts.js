$(document).ready(function() {
  $('#sidebar-btn, #close, #link-1, #link-2, #link-3').on('click', function() {
    $('#sidebar').toggleClass('visible');
    $('#overlay').toggleClass('show');
    $('#sidebar').toggle();
  });
});