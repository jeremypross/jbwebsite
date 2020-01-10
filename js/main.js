"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const artistLink = document.getElementById('artists');
  const artistMenu = document.getElementById('menu__artists');
  const containerRight = document.getElementById('containerRight');
  const photo = document.getElementsByClassName('photo');
  const caption = document.getElementsByClassName('photoCaption');
  const container = document.getElementById('container');

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

  var modal = document.createElement('div');
  var modalImg = document.createElement('img');
  
  const imageModal = (e) => {
    const imageSrc = e.target.parentElement.firstChild.nextElementSibling.src;
    modal.setAttribute('id', 'modal');
    modal.appendChild(modalImg);
    modalImg.src = imageSrc;
    container.appendChild(modal);
    document.body.style.backgroundColor = "#565656";

    // change cursor into X and make click close modal?
  };
  
  const closeModal = () => {
    container.removeChild(modal);
    document.body.style.backgroundColor = "white";


  }

 
  artistLink.addEventListener('click', artistMenuToggle);
  cross.addEventListener('click', artistMenuToggle);
  minus.addEventListener('click', artistMenuToggle);
  modal.addEventListener('click', closeModal);

  for (var i=0; i < photo.length; i++) {
    photo[i].addEventListener('click', imageModal, false);
  }

  // for (var i=0; 0 < photo.length; i++) {
  //   photo[i].addEventListener('hover', hoverCaption)
  // }

});
