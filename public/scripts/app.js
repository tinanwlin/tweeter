/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Helper Functions
function createTweetElement(data) {
  var dateFromNow = moment(data.created_at).fromNow();
  var tweetHTML = '\
       <article class="tweet">\
        <header class="tweet-header">\
          <img class="avatar" src="http://lorempixel.com/50/50/" alt="">\
          <h3>'+ data.user.name +'</h3>\
          <p>'+ data.user.handle +'</p>\
        </header>\
        <div class="tweet-content"> '+ data.content.text +'</div>\
        <footer class="tweet-footer">\
          <p>'+ dateFromNow +'</p>\
          <div class="hover-btns hide">\
            <i class="fas fa-heart"></i>\
            <i class="fas fa-share"></i>\
            <i class="fas fa-flag"></i>\
          </div>\
        </footer>\
      </article>\
  '
  return tweetHTML;
}

// Hardcode data
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(function () {

function renderTweets (tweets){
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (var i = 0; i < tweets.length; i++) {
    var eachTweet = tweetData[i];
    var $tweet = createTweetElement(eachTweet);
    $('#tweets').prepend($tweet);
  }
  
}
renderTweets(tweetData);


  $(".tweet").mouseenter(function () {
    $(this).find('.hover-btns').fadeIn();
  });

  $(".tweet").mouseleave(function () {
    $(this).find('.hover-btns').fadeOut();
  });
})