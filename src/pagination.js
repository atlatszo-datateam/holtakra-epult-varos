const navigationButtons = Array.from(document.querySelectorAll('.navigation-link'))
const navigationListItems = Array.from(document.querySelectorAll('.navigation li'))
const nextPageButtons = Array.from(document.querySelectorAll('.next-page'))
const pages = Array.from(document.querySelectorAll('.page'))
const pagesTopPositions = pages.map(getElementTopPosition)
let isScrolling = undefined

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
  navigationListItems.forEach(item => item.classList.remove('active'))
  button.closest('li').classList.add('active')
}

function navigateToPage (event) {
  event.preventDefault()

  const pageId = event.target.getAttribute('href')
  const page = document.querySelector(pageId)
  
  page.scrollIntoView({behavior: 'smooth', block: 'start'})
}

function setCurrentPage () {
  const windowPosition = window.scrollY

  window.clearTimeout(isScrolling)

  isScrolling = setTimeout(function () {
    const page = getClosestPage(windowPosition)

    changeActivePaginationButton(navigationButtons[page])
  }, 66)
}

function toggleNavigationText (event) {
  event.target.closest('li').classList.toggle('hover')
}

setCurrentPage()

navigationButtons.forEach(button => button.addEventListener('click', navigateToPage))
navigationButtons.forEach(button => button.addEventListener('mouseover', toggleNavigationText))
navigationButtons.forEach(button => button.addEventListener('mouseleave', toggleNavigationText))
nextPageButtons.forEach(button => button.addEventListener('click', navigateToPage))
window.addEventListener('scroll', setCurrentPage)
