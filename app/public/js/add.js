//When user clicks add-btn

$("#add-btn").on("click", function(event) {
    event.preventDefault();
//Make a newBook object
var newBook = {
    title: $("#title").val().trim(),
    author: $("#author").val().trim(),
    genre: $("#genre").val().trim(),
    pages: $("#pages").val().trim()
};
//Send an AJAX POST-request with jQuery
$.post("/api/new", newBook)
    //On success, run the following
    .then(function(data) {
    //Log the data found
    console.log(data);
});
//Empty each input box
$("#title").val("");
$("#author").val("");
$("#genre").val("");
$("#pages").val("");
});