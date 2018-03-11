  $("#input").keyup(function(){
    var stringPesquisa = $(this).val();
    $('termo').parent().hide();
    $('termo:contains('+stringPesquisa+')').parent().show()
  });


