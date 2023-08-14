/*
Make the Carsoual Fit the Full Window 
*/
const CarsoualImges = document.querySelectorAll('.carousel img');
const Navbar = document.querySelector('.navbar');
CarsoualImges.forEach(ele => {
    console.log(window.innerHeight);
    ele.style.height = `${window.innerHeight - Navbar.offsetHeight}px`;
})


/* Hnadel The Input Label */
document.querySelectorAll('.label-move input').forEach(ele  => {
    ele.addEventListener('keyup', (cur)=>{
        if(ele.value){
            ele.classList.add('border-success')
            ele.classList.remove('border-danger')
            ele.nextElementSibling.classList.add('up');
        }else{
            ele.classList.remove('border-success')
            ele.classList.add('border-danger')
            ele.nextElementSibling.classList.remove('up');
        }
    })
});


