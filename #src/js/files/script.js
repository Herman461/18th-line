const iconMenu = document.querySelector('.top-menu__icon');

if (iconMenu) {
   const menuContent = document.querySelector('.menu__content');
	const topMenu = document.querySelector('.top-menu');
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuContent.classList.toggle('_active');
		topMenu.classList.toggle('_active');
   });
}
