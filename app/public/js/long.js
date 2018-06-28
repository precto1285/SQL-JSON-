//request to api route
$.get("/api/books/long", function(data){
    //For each book our server sends back
    for(var i=0; i < data.length; i++) {
        //Create a parent div
        var wellSection = $("<div>");
        //Add a class
        wellSection.addClass("well");
        //Add an id
        wellSection.attr("id", "book-well-" + i);
        //Append the well
        $("well-section").append(wellSection);

        //Add our book to data
        $("#book-well-" + i).append("<h2>" + (i+1) + ". " + data[i].title + "</h2>");
        $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h3>");
        $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h3>");
        $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h3>");
    }
});