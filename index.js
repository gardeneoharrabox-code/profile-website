const buttons = document.querySelectorAll('.btn-menu');
const screens = document.querySelectorAll('.screen-menu');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    screens.forEach(screen => screen.classList.add('d-none'));

    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.remove('d-none');
  });
});

document.getElementById("waForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name-contact").value;
    let message = document.getElementById("message").value;

    let waNumber = "62895337272288";

    let waLink = `https://wa.me/${waNumber}?text=
    Halo, saya *${name}*.

    ${message}
        `;

        window.open(waLink, "_blank");
      });

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // hapus class active dari semua link
      navLinks.forEach(l => l.classList.remove('active'));
      // tambah class active ke link yang diklik
      this.classList.add('active');
    });
  });

const elements = document.querySelectorAll('.animate-left, .animate-right, .animate-up, .animate-down');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
    } else {
      e.target.classList.remove('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };