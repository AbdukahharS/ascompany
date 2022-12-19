window.addEventListener('DOMContentLoaded', () => {
  if (navigator.onLine) {
    document.querySelector('.body-child').classList.add('d-block')
    document.querySelector('.body-child').classList.remove('d-none')
  } else {
    const offline = document.querySelector('.offline')
    offline.classList.add('d-block')
    offline.classList.remove('d-none')
    document.querySelector('.body-child').classList.add('d-none')
    document.querySelector('.body-child').classList.remove('d-block')
  }
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const name = document.querySelector('.name')
  const email = document.querySelector('.email')
  const message = document.querySelector('.message')
  const btn = document.querySelector('.btn-send')
  const alertBox = document.querySelector('.alertBox')
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  btn.addEventListener('click', (e) => {
    if (name.value == '' || email.value == '' || message.value == '') {
      alertBox.classList.add('d-block')
      alertBox.classList.remove('d-none')
      alertBox.textContent = 'Nimadir kiritilmagan'
      e.preventDefault()
    } else if (!re.test(email.value)) {
      alertBox.classList.add('d-block')
      alertBox.classList.remove('d-none')
      alertBox.textContent = 'Email xato!'
      e.preventDefault()
    } else {
      alertBox.classList.add('d-block')
      alertBox.classList.remove('d-none')
      alertBox.classList.remove('alert-danger')
      alertBox.classList.add('alert-success')
      alertBox.textContent = 'Xabar yuborilmoqda'
    }
  })
})
