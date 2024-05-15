document.addEventListener("DOMContentLoaded", function() {
  // Variables principales
  var aboutTitle = document.querySelector('.about-myself .content h2');
  var developmentWrapper = document.querySelector('.development-wrapper');
  var developmentIsVisible = false;

  /* ####### SECCIÓN HERO ####### */
  var headerContent = document.querySelector('.hero .content .header');
  setTimeout(function() {
      headerContent.style.opacity = '1';
      headerContent.style.top = '50%';
  }, 500);

  window.addEventListener("scroll", function() {
      var bottom_of_window = window.pageYOffset + window.innerHeight;

      /* ##### SECCIÓN ACERCA DE MI #### */
      if (bottom_of_window > (aboutTitle.offsetTop + aboutTitle.offsetHeight)) {
          aboutTitle.classList.add('aboutTitleVisible');
      }

      /* ##### SECCIÓN EXPERIENCIA #### */
      var hiddenElements = document.querySelectorAll('.experience .content .hidden');
      hiddenElements.forEach(function(element) {
          var bottom_of_object = element.offsetTop + element.offsetHeight;
          if (bottom_of_window > bottom_of_object) {
              element.style.opacity = '1';
              element.style.marginLeft = '0';
          }
      });

      /*###### SECCIÓN HABILIDADES ######*/
      var middle_of_developmentWrapper = developmentWrapper.offsetTop + developmentWrapper.offsetHeight / 2;
      if (bottom_of_window > middle_of_developmentWrapper && !developmentIsVisible) {
          var skillsBarContainers = document.querySelectorAll('.skills-bar-container li');
          skillsBarContainers.forEach(function(container) {
              var barContainer = container.querySelector('.bar-container');
              var dataPercent = parseInt(barContainer.getAttribute('data-percent'));
              var elem = container.querySelector('.progressbar');
              var percent = container.querySelector('.percent');
              var width = 0;

              var id = setInterval(frame, 15);

              function frame() {
                  if (width >= dataPercent) {
                      clearInterval(id);
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      percent.innerHTML = width + " %";
                  }
              }
          });
          developmentIsVisible = true;
      }
  });
});
