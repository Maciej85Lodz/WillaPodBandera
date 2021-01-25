
/* Created by maciejwolejszo.pl All rights reserved.  */

const selectElement = (s) => document.querySelector(s);

//Open The menu on click
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
});

//Close The menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});

//Gallery

const msnry = new Macy({
    container: '.gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
      450: 2,
      700: 3,
      1100: 4,
    },
    margin: {
      x: 20,
      y: 20,
    }
  })