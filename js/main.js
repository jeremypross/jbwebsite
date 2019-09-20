"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const artistLink = document.getElementById('artists');
  const artistMenu = document.getElementById('menu__artists');
  const containerRight = document.getElementById('containerRight');
  const photo = document.getElementsByClassName('photo');
  const caption = document.getElementsByClassName('photoCaption');

  console.log("photo", photo)

  const cross = document.getElementById('cross');
  const minus = document.getElementById('minus');

  const artistMenuToggle = () => {
    if (artistMenu.classList.contains('anim')) {
      // hide menu
      artistMenu.classList.remove('anim');
      containerRight.classList.remove('anim');
      minus.classList.remove('anim');
      cross.classList.remove('anim');

    } else {
      // show menu
      artistMenu.classList.add('anim');
      containerRight.classList.add('anim');
      minus.classList.add('anim');
      cross.classList.add('anim');
    }

  };

  // for in loop over json object to set src of array of image divs to json src object string

  const hoverCaption = () => {
    // create div for overlay
    // append to photo div
    // set innerHTML to caption in JSON object
    // if user is hovering display, if not hide
    // OR
    caption.classList.add('anim');

  };

  artistLink.addEventListener('click', artistMenuToggle);
  cross.addEventListener('click', artistMenuToggle);
  minus.addEventListener('click', artistMenuToggle);

  // for (var i=0; 0 < photo.length; i++) {
  //   photo[i].addEventListener('hover', hoverCaption)
  // }




});
