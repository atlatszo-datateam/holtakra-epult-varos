const facebookShareButtons = Array.from(document.querySelectorAll('.social-button.facebook'))
const tumblrShareButtons = Array.from(document.querySelectorAll('.social-button.tumblr'))
const twitterShareButtons = Array.from(document.querySelectorAll('.social-button.twitter'))

function shareOnFacebook () {
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response){});
}

function shareOnTumblr () {
  console.log('shared on tumblr')
}

function shareOnTwitter () {
  console.log('shared on twitter')
}

facebookShareButtons.forEach(button => button.addEventListener('click', shareOnFacebook))
tumblrShareButtons.forEach(button => button.addEventListener('click', shareOnTumblr))
twitterShareButtons.forEach(button => button.addEventListener('click', shareOnTwitter))
