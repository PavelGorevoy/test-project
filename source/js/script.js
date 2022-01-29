var sidebar = document.querySelector('.sidebar');
var sidebarButton = document.querySelector('.setting__button');

sidebarButton.addEventListener('click', function () {
  sidebar.classList.toggle(('sidebar__close'))
});

(function () {
  var toggle = document.querySelector('.hamburger--toggle');

  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();
