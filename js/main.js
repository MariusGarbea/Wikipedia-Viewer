$(document).ready(function(){
  $("button").click(function(){
    var query = $("input").val();
     var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=' + query;
    $.getJSON(url, function(info){
      var bool = true;
      $("ul").empty();
      $("h1").css('margin-bottom', '2%');
      for (var i=0; i<info[3].length; i++)
        if(info[2][i] !== ""){
          $("ul").append('<a href="'+info[3][i]+'"target="_blank"><li>'+info[2][i]+'</li></a>');
          bool = false;
        }
      if(bool == true)
          $("ul").append("<li>Not Found</li>");
    });
    return false;
  });
});
