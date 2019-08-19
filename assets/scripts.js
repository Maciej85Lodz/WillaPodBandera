//function expression to select elements
/* Created by maciejwolejszo.pl
All rights reserved by Willa Pod Banderą */

const selectElement = (s) => document.querySelector(s);

//Open The menu on click
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
});

//Close The menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});