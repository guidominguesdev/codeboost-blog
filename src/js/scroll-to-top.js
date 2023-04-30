const btnScrollTop = document.getElementById('js-btn-scroll-top')

btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
