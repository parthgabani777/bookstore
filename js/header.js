const humBurger = document.querySelector('.humburger');
const navItemGroup = document.querySelector('.nav-item-group');

humBurger.addEventListener('click',()=>{
      const navItemGroupStyle = window.getComputedStyle(navItemGroup);
      if(navItemGroupStyle.display === 'none') return navItemGroup.style.display = 'flex';
      navItemGroup.style.display = 'none';
});