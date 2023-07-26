/*
Make the Carsoual Fit the Full Window 
*/
const CarsoualImges = document.querySelectorAll('.carousel img');
const Navbar = document.querySelector('.navbar');
CarsoualImges.forEach(ele => {
    console.log(window.innerHeight);
    ele.style.height = `${window.innerHeight - Navbar.offsetHeight}px`;
})