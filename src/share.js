const facebookShareButtons = Array.from(document.querySelectorAll('.social-button.facebook'))
const tumblrShareButtons = Array.from(document.querySelectorAll('.social-button.tumblr'))
const twitterShareButtons = Array.from(document.querySelectorAll('.social-button.twitter'))
const {URL} = document
const windowSize = 'height=350,width=600'

function shareOnFacebook (e) {
  /* FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response){}); */
  e.preventDefault();
  const popup = window.open(`https://www.facebook.com/sharer/sharer.php?u=${URL}`, 'facebook-popup', windowSize);
  if (popup.focus) popup.focus()

  return false
}

function shareOnTumblr (e) {
  console.log('shared on tumblr')
  e.preventDefault()

  const popup = window.open(`http://tumblr.com/widgets/share/tool?canonicalUrl=${URL}`, 'tumblr-popup', windowSize)
  if (popup.focus) popup.focus()

  return false
}

function shareOnTwitter (e) {
  console.log('shared on twitter')
  e.preventDefault();
  const popup = window.open(`https://twitter.com/share?url=${URL}`, 'twitter-popup', windowSize);
  if (popup.focus) popup.focus()

  return false

}

facebookShareButtons.forEach(button => button.addEventListener('click', shareOnFacebook))
tumblrShareButtons.forEach(button => button.addEventListener('click', shareOnTumblr))
twitterShareButtons.forEach(button => button.addEventListener('click', shareOnTwitter))
