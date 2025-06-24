document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('.typing', {
    strings: ['Software Developer', 'Web Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  const navToggler = document.querySelector('.nav-toggler');
  const aside = document.querySelector('.aside');

  navToggler.addEventListener('click', () => {
    aside.classList.toggle('open');
  });

  // Navigation smooth scroll and active state
  const nav = document.querySelector('.nav'),
        navItems = nav.querySelectorAll('li'),
        totalNavItems = navItems.length;

  // Click: set active nav link
  for (let i = 0; i < totalNavItems; i++) {
    const a = navItems[i].querySelector('a');
    a.addEventListener('click', function () {
      for (let j = 0; j < totalNavItems; j++) {
        navItems[j].querySelector('a').classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  // Scroll: set active nav link
  const sectionElements = Array.from(document.querySelectorAll('.section[id]'));
  window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY || window.pageYOffset;
    let offset = 100; // adjust if you have a fixed header

    let currentSectionId = sectionElements[0].id;
    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i];
      if (section.offsetTop - offset <= scrollPos) {
        currentSectionId = section.id;
      }
    }

    for (let i = 0; i < totalNavItems; i++) {
      const a = navItems[i].querySelector('a');
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + currentSectionId) {
        a.classList.add('active');
      }
    }
  });
});