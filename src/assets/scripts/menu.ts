export const menuList = document.getElementById('menu-list');
export const openMenu = () => {
  if (!menuList.classList.contains('is-open')) {
    menuList.classList.add('is-open');
  }
};

export const closeMenu = () => {
  if (menuList.classList.contains('is-open')) {
    menuList.classList.remove('is-open');
  }
}
