import { closeMenu, menuList, openMenu } from "./menu";

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    openMenu();
  });
  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    closeMenu();
  });


  const menuChildren = Array.from(menuList.children);
  document.addEventListener('click', (event) => {
    if (window.innerWidth < 768) {
      const target = event.target as HTMLElement;
      if (menuList.classList.contains('is-open')) {
        if (!(target.classList.contains('nav__right') || menuChildren.includes(target.parentElement))) {
          console.log('click outside');
          closeMenu()
        }
      }
    }
  });
});
