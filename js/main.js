"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const artistLink = document.getElementById('artists');
  const artistMenu = document.getElementById('menu__artists');
  const cross = document.getElementById('cross');
  const minus = document.getElementById('minus');


  const artistMenuToggle = () => {
    if (artistMenu.classList.contains('anim')) {
      // hide menu
      artistMenu.classList.remove('anim');
      minus.classList.remove('anim')
      cross.classList.remove('anim')
    } else {
      // show menu
      artistMenu.classList.add('anim');
      minus.classList.add('anim')
      cross.classList.add('anim')
    }

  };

  artistLink.addEventListener('click', artistMenuToggle);
  cross.addEventListener('click', artistMenuToggle);
  minus.addEventListener('click', artistMenuToggle);

});
