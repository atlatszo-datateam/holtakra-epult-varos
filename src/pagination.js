const navigationButtons = Array.from(document.querySelectorAll('.navigation-link'))
const pages = Array.from(document.querySelectorAll('.page'))
const pagesTopPositions = pages.map(getElementTopPosition)

function getElementTopPosition (element) {
  return element.offsetTop
}

function getClosestPage (windowPosition) {
  const closestPosition = pagesTopPositions.reduce(function (prev, curr) {
    const isCurrentSmaller = Math.abs(curr - windowPosition) < Math.abs(prev - windowPosition)
    return isCurrentSmaller ? curr : prev
  })

  return pagesTopPositions.indexOf(closestPosition)
}

function changeActivePaginationButton (button) {
  navigationButtons.forEach(button => button.classList.remove('active'))
  button.classList.add('active')
}

function navigateToPage (event) {
  event.preventDefault()

  const pageId = event.target.getAttribute('href')
  const page = document.querySelector(pageId)
  
  page.scrollIntoView({behavior: 'smooth', block: 'start'})
  history.pushState(null, null, pageId)
}

function setCurrentPage () {
  const windowPosition = window.scrollY

  window.requestAnimationFrame(function () {
    const page = getClosestPage(windowPosition)
    changeActivePaginationButton(navigationButtons[page])
    history.pushState(null, null, `#page-${page + 1}`)
  })
}

setCurrentPage()

navigationButtons.forEach(button =>  button.addEventListener('click', navigateToPage))
window.addEventListener('scroll', setCurrentPage)
