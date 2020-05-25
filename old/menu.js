$(document).ready(function(){
    $('.dropdown-submenu').hover(function(e){
      $(this).children('ul.dropdown-menu').toggle('show');
    });
  });