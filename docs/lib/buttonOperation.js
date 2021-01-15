'use strict'

const ACTIVEICON = 'material-icons md-dark ';
const INACTIVEICON = 'material-icons md-dark md-inactive ';

function active(id1, func, id2) {
  document.getElementById(id1).addEventListener('click', func);
  document.getElementById(id2).className = ACTIVEICON;
}

function inactive(id1, func, id2) {
  document.getElementById(id1).removeEventListener('click', func);
  document.getElementById(id2).className = INACTIVEICON;
}
