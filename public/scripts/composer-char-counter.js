$(function () {

  $("textarea").on("keyup", function () {
    var charCount = $(this).val().length;
    var charRemaining = 140 - charCount;
    var counter = $(this).siblings(".counter");
    counter.text(charRemaining);
    if (charRemaining < 0) {
      counter.css({
        'color': 'red'
      })
    } else {
      counter.css({
        'color': '#244751'
      })
    }
  })

});
