//Handler for all.html

//get request to api route
$.get("/api/all", function (data) {
    //for each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
        //Create parent div
        var wellSection = $("<div>");
        //Add a class to the div
        wellSection.addClass("well");
        //Add an id to the well
        wellSection.attr("id", "book-well-" + i);
        //Append the well to the well section
        $("#well-section").append(wellSection);

        //Add our book data to the well
        $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
        $("#book-well-" + i).append("<h3>" + data[i].author + "</h3>");
        $("#book-well-" + i).append("<h3>" + data[i].genre + "</h3>");
        $("#book-well-" + i).append("<h3>" + data[i].pages + "</h3>");
    }
});