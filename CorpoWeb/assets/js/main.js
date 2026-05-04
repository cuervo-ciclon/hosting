(function () {
    "use strict";

    //===== Preloader
    window.onload = function () {
        window.setTimeout(fadeout, 200);
    };

    function fadeout() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Espera 0.5s para que la transición de opacity termine
        }
    }

    //===== Sticky
    window.onscroll = function () {
        const headerNavbar = document.querySelector(".navbar-area");
        const sticky = headerNavbar.offsetTop;

        if (window.pageYOffset > sticky) {
            headerNavbar.classList.add("sticky");
        } else {
            headerNavbar.classList.remove("sticky");
        }

        // Mostrar u ocultar el botón de volver arriba
        const backToTop = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    //===== Navbar-toggler
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            this.classList.toggle("active");
        });
    }

    //===== Cerrar el menú al hacer clic en un enlace (solo en móvil)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                const navbarCollapse = document.querySelector('#navbarSupportedContent');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    // Usa jQuery para cerrar el collapse (Bootstrap 4)
                    if (typeof jQuery !== 'undefined') {
                        jQuery('#navbarSupportedContent').collapse('hide');
                    } else {
                        // Alternativa sin jQuery
                        navbarCollapse.classList.remove('show');
                    }
                    navbarToggler.classList.remove("active");
                }
            }
        });
    });

    //======== Tiny slider
    if (typeof tns !== 'undefined') {
        tns({
            container: '.client-logo-carousel',
            slideBy: 'page',
            autoplay: true,
            autoplayButtonOutput: false,
            mouseDrag: true,
            gutter: 15,
            nav: false,
            controls: false,
            responsive: {
                0: { items: 1 },
                540: { items: 2 },
                768: { items: 3 },
                992: { items: 4 }
            }
        });
    }

    // WOW Scroll Spy
    if (typeof WOW !== 'undefined') {
        const wow = new WOW({ mobile: false });
        wow.init();
    }

    //======= Portfolio-btn active
    const portfolioBtns = document.getElementsByClassName("portfolio-btn");
    for (let i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].onclick = function () {
            // Remover clase "active" de todos los botones
            for (let j = 0; j < portfolioBtns.length; j++) {
                portfolioBtns[j].classList.remove("active");
            }
            // Agregar clase "active" al botón clickeado
            this.classList.add("active");
        };
    }
})();