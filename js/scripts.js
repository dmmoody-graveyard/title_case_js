var titleCase = function(title) {
  var not_capitalized = ["a", "and", "the", "for", "or", "of"]
  var new_title = ""
  var words = title.toLowerCase().split(" ")
  words.forEach(function(word) {
    if ((not_capitalized.indexOf(word) >= 0) && ((word !== words[0]) && (word !== words[words.length - 1]))) {
      new_title += word + " ";
    } else {
      new_title += word.charAt(0).toUpperCase() + word.substring(1) + " ";
    }
  });
  return new_title.trim()
};


$(document).ready(function() {
  $("form#form").submit(function() {
    var title = ($("input#title").val());
    var result = titleCase(title);

    $(".result").text(result);

    // event.preventDefault();
  });
});
