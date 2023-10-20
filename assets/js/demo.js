/**
 * demo.js
 *
 * Licensed under the MIT license.
 * https://opensource.org/license/mit/
 * 
 * Copyright 2023, WANNABEDEV
 * https://wannabedev.io
 */

// images loaded
imagesLoaded( '.blob', { background: true }, function() {
  
  // loaded
  document.querySelector('.loader').classList.add("is-loaded");
  
  // coidea:demo
  const blobCursor = (() => {
    const CURSOR = document.querySelector('#cursor-blob');
    const LINKS = document.querySelectorAll('.nav_link');
    const setCursorPos = (e) => {
      const {
        pageX: posX,
        pageY: posY
      } = e;
      CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
      CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;
    };
    document.addEventListener('mousemove', setCursorPos);

    // mouse over
    LINKS.forEach(link => link.addEventListener('mouseover', function() {
      CURSOR.style.transform = 'scale(5)',
      CURSOR.style.background = "url('" + link.dataset.bcg + "') no-repeat center center"
    }));

    // mouse leave
    LINKS.forEach(link => link.addEventListener('mouseleave', function(event) {
      CURSOR.style.transform = '',
      CURSOR.style.background = '',
      CURSOR.classList.remove("active");
    }));

    // mouse click
    LINKS.forEach(link => link.addEventListener('click', function() {
      CURSOR.style.transform = 'scale(15)'
      CURSOR.classList.add("active");
    }));

  })();

});
