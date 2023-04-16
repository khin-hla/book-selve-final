const mobileSide = document.querySelector('.mobile-sidebar');
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  mobileSide.classList.toggle('open')
})