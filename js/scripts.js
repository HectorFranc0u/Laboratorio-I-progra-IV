/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Practica Teoria.

const NombreImput = document.querySelector('#InputNombre')
const ApellidoImput = document.querySelector('#InputApellido')
const BotonEnviar = document.querySelector('button#ButtonEnviar')

BotonEnviar.addEventListener('click', () => {
    if (NombreImput.value.length == 0 || ApellidoImput.value.length == 0){
        window.alert('No puede enviar un elemento vacio!')
    } else { 
        res = NombreImput.value + ' ' + ApellidoImput.value
        document.write(res + ' Bienvenido!')
        NombreImput.value = ''
        ApellidoImput.value = ''
        
    }
})