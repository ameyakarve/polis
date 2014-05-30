$(document).ready(function() {
  //Galleria.loadTheme('/assets/js/galleria.classic.min.js');
  Galleria.configure({
    _toggleInfo: false,
    showInfo: true,
    transition: 'fade'
  });
  $('.galleria').galleria({
    width: 700,
    height: 467 //--I made heights match
  });
});