const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav a');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => revealObserver.observe(section));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.5 });

document.querySelectorAll('main [id]').forEach((el) => navObserver.observe(el));
