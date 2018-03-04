$(function () {

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Helper Functions
  function createTweetElement(data) {
    var dateFromNow = moment(data.created_at).fromNow();
    var tweetHTML = '\
       <article class="tweet">\
        <header class="tweet-header">\
          <img class="avatar" src=" '+ escape(data.user.avatars.small) + '">\
          <h3>'+ escape(data.user.name) + '</h3>\
          <p>'+ escape(data.user.handle) + '</p>\
        </header>\
        <div class="tweet-content"> '+ escape(data.content.text) + '</div>\
        <footer class="tweet-footer">\
          <p>'+ escape(dateFromNow) + '</p>\
          <div class="hover-btns">\
            <i class="fas fa-flag"></i>\
            <i class="fas fa-retweet"></i>\
            <i class="fas fa-heart"></i>\
          </div>\
        </footer>\
      </article>\
    '
    return tweetHTML;
  }

  function renderTweets(tweets) {
    for (var i = 0; i < tweets.length; i++) {
      var eachTweet = tweets[i];
      var $tweet = createTweetElement(eachTweet);
      $('#tweets').prepend($tweet);
    }
  }

  var $form = $('.new-tweet form');
  $form.on('submit', function (event) {
    event.preventDefault();

    var charCount = $(".new-tweet textarea").val().length;
    var charRemaining = 140 - charCount;
    if (charRemaining < 0) {
      $("#error-message").text("TOO MUCH WORDS!!")
    } else if (charRemaining >= 140) {
      $("#error-message").text("SAY SOMETHING!!")
    } else {
      var data = $('.new-tweet form').serialize();
      $.post('/tweets/', data).done(function (response) {
        loadTweets();
        $('.new-tweet textarea').val('');
        $('.counter').text(140);
        $("#error-message").text('');
        $("section.new-tweet").hide();
      })
    }
  });

  function loadTweets() {
    $('.tweet').remove();
    $.get('/tweets/').done(function (response) {
      renderTweets(response);
    })
  }

  loadTweets();

  $(".compose-btn").click(function () {
    $(".new-tweet").slideToggle("slow", function () {
      $(this).find("textarea").focus();
    });
  });

});