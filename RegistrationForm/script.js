const wrapper = document.querySelector(".wrapper")
const registeLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")

registeLink.onclick = () => {
  wrapper.classList.add('active');
}

loginLink.onclick = () => {
  wrapper.classList.remove('active');
}



