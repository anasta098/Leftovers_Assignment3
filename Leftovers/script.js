"use strict";
var panel = document.querySelectorAll('.panel');
var itemsSlice = Array.prototype.slice.call(panel);
var fPan = itemsSlice[0];
var panelHead = document.querySelectorAll('.head');

for (var i = 0; i < panelHead.length; i++) {
  var panelHeight = panelHead[i].offsetHeight;
  panelHead[i].addEventListener('click', function(e) {
    e.preventDefault();
    var parent = this.parentElement;
    parent.classList.toggle('active');
    var parentIndex = itemsSlice.indexOf(parent);
    for (var x = 0; x < panel.length; x++) {
      var panelBorder = parseInt(getComputedStyle(panel[x]).borderBottomWidth);
      var panelMargin = -((panelHeight + panelBorder) * (x + 1)) + 'px';
      panel[x] != parent ? panel[x].classList.remove('active') : null;
      panel[x].classList.contains('active') != true && x < parentIndex ? fPan.style.marginTop = panelMargin : parent.classList.contains('active') != true ? fPan.style.marginTop = '0' : null;

    };
  });

};