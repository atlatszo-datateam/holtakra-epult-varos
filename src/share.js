const facebookShareButtons = Array.from(document.querySelectorAll('.social-button.facebook'))
const tumblrShareButtons = Array.from(document.querySelectorAll('.social-button.tumblr'))
const twitterShareButtons = Array.from(document.querySelectorAll('.social-button.twitter'))
const {URL} = document
const windowSize = 'height=350,width=600'
const tags = 'átló,átlátszó,adatvizualizáció,dataviz'

function shareOnFacebook () {
  const popup = window.open(`https://www.facebook.com/sharer/sharer.php?u=${URL}`, 'facebook-popup', windowSize);
  if (popup.focus) popup.focus()

  return false
}

function shareOnTumblr () {
  const popup = window.open(`https://tumblr.com/share/tool?shareSource=legacy&canonicalUrl=${URL}&posttype=link&title=Holtakra+épült+város&content=${URL}`, 'tumblr-popup', windowSize)
  if (popup.focus) popup.focus()

  return false
}

function shareOnTwitter () {
  const popup = window.open(`https://twitter.com/share?url=${URL}`, 'twitter-popup', windowSize);
  if (popup.focus) popup.focus()

  return false
}

facebookShareButtons.forEach(button => button.addEventListener('click', shareOnFacebook))
tumblrShareButtons.forEach(button => button.addEventListener('click', shareOnTumblr))
twitterShareButtons.forEach(button => button.addEventListener('click', shareOnTwitter))
