const $footerFormBtn = document.querySelector('#subscribeBtn')
const $footerFormInput = document.querySelector('#subscribeInput')

$footerFormBtn.addEventListener('click', () => {
  active()
})

function active() {
  $footerFormInput.value = ''
  $footerFormBtn.classList.add('active')
  setTimeout(() => {
    $footerFormBtn.classList.remove('active')
  }, 1000)
}


