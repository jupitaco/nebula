const openNavIcon = document.querySelector('.nav-icon');
const closeNavIcon = document.querySelector('.close');
const toggleNavBar = document.querySelector('.close-navbar');
const purrAddressBtn = document.querySelectorAll('#purrAddressBtn');

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle('open-navbar');
  console.log('first');
};

openNavIcon.addEventListener('click', handleClick);
closeNavIcon.addEventListener('click', handleClick);
