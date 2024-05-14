document.addEventListener("DOMContentLoaded", function() {
  // Main variables
  var aboutTitle = document.querySelector('.about-myself .content h2');
  var developmentWrapper = document.querySelector('.development-wrapper');
  var developmentIsVisible = false;

  /* ####### HERO SECTION ####### */

  var heroHeader = document.querySelector('.hero .content .header');
  setTimeout(function() {
    heroHeader.style.opacity = '1';
    heroHeader.style.top = '50%';
  }, 500);

  window.addEventListener('scroll', function() {
    var bottom_of_window = window.scrollY + window.innerHeight;

    /* ##### ABOUT MYSELF SECTION #### */
    if (bottom_of_window > (aboutTitle.offsetTop + aboutTitle.offsetHeight)) {
      aboutTitle.classList.add('aboutTitleVisible');
    }

    /* ##### EXPERIENCE SECTION #### */
    var hiddenElements = document.querySelectorAll('.experience .content .hidden');
    hiddenElements.forEach(function(hiddenElement) {
      var bottom_of_object = hiddenElement.offsetTop + hiddenElement.offsetHeight;
      if (bottom_of_window > bottom_of_object) {
        hiddenElement.style.opacity = '1';
        hiddenElement.style.marginLeft = '0';
      }
    });

    /*###### SKILLS SECTION ######*/
    var middle_of_developmentWrapper = developmentWrapper.offsetTop + developmentWrapper.offsetHeight / 2;

    if ((bottom_of_window > middle_of_developmentWrapper) && (developmentIsVisible === false)) {
      var skillBars = document.querySelectorAll('.skills-bar-container li');
      skillBars.forEach(function(skillBar) {
        var barContainer = skillBar.querySelector('.bar-container');
        var dataPercent = parseInt(barContainer.dataset.percent);
        var elem = skillBar.querySelector('.progressbar');
        var percent = skillBar.querySelector('.percent');
        var width = 0;

        var id = setInterval(function() {
          if (width >= dataPercent) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + "%";
            percent.textContent = width + " %";
          }
        }, 15);
      });
      developmentIsVisible = true;
    }
  });
});
