$(document).ready(function(){

  var topics = ["squirrel","bear","orangutan","giraffe", "squirrel","bear","orangutan","giraffe", "squirrel","bear","orangutan","giraffe", "squirrel","bear","orangutan","giraffe"];

  function initializeButtons(){
    for(let i=0; i<topics.length; i++){
      var b = $("<button>");
      b.addClass("topic-button btn btn-primary");
      b.text(topics[i]);
      $(".buttons-row").append(b);
    }
  }

  function addButton(searchTerm){
    var b = $("<button>");
    b.addClass("topic-button btn btn-primary");
    b.text(searchTerm);
    $(".buttons-row").append(b);
  }


  function retrieveGifs(searchTerm){

    var url = "http://api.giphy.com/v1/gifs/search";

    var parameters = $.param({
      'api_key': "dc6zaTOxFJmzC",
      'q': searchTerm,
    });

    url += '?' + parameters;

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      $("#images").empty();
      console.log(result);
      for(let i=0; i<result.data.length; i++){
        var imgDiv = $("<div>");
        imgDiv.addClass("imgDiv col-sm-4");

        var h6 = $("<h6>");
        h6.text("tesdafdsfdsfdfsdfadft");

        var image = result.data[i];

        var img = $("<img>");
        img.attr("src", image.images.fixed_height_still.url);
        img.attr("hidden_url", image.images.fixed_height.url)
        img.addClass("img-responsive");

        imgDiv.append(h6);
        imgDiv.append(img);

        $("#images").append(imgDiv);
      }
    });
  }


  $(".buttons-row").on("click", "button", function(event){
    event.preventDefault();
    retrieveGifs($(this).text());
  });

  $("#addButton").on("click", function(event) {
    event.preventDefault();
    var searchTerm = $("#search").val().trim();
    addButton(searchTerm);
  });

  $("#images").on("click", "img", function(event){

    var img = $(this);
    var tempURL = img.attr("src");
    var hiddenURL = img.attr("hidden_url");
    img.attr("src", hiddenURL);
    img.attr("hiddenURL", tempURL);
    console.log(tempURL);
    console.log(hiddenURL);
  });

  initializeButtons();
});
