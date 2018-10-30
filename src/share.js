const facebookShareButtons = Array.from(document.querySelectorAll('.social-button.facebook'))
const tumblrShareButtons = Array.from(document.querySelectorAll('.social-button.tumblr'))
const twitterShareButtons = Array.from(document.querySelectorAll('.social-button.twitter'))
const url = document.URL

function shareOnFacebook (e) {
  /* FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response){}); */
  e.preventDefault();
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
  if(facebookWindow.focus) { facebookWindow.focus(); }
    return false;
}

function shareOnTumblr () {
  console.log('shared on tumblr')
  e.preventDefault()

  window.open("http://www.tumblr.com/share", 'newwindow', 'width=350, height=600')
}

function shareOnTwitter (e) {
  console.log('shared on twitter')
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
  if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;

}

facebookShareButtons.forEach(button => button.addEventListener('click', shareOnFacebook))
tumblrShareButtons.forEach(button => button.addEventListener('click', shareOnTumblr))
twitterShareButtons.forEach(button => button.addEventListener('click', shareOnTwitter))
