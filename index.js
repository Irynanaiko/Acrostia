"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // Initialize and add the map
    function initMap() {

        const uluru = {
            lat: 49.84,
            lng: 24.02
        };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: uluru,
        });

        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
        const infowindow = new google.maps.InfoWindow({
            content: 'Uniquely visualize distinctive web-readiness via cross-unit networks.',
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });

    }
    initMap();
});






// Animation
// $(window).scroll(function () {
//     console.log('scroll');
//     if ($(window).scrollTop() <= 1000) {
//         $('down').addClass('animate__animated animate__bounce');
//         console.log('scroll');
//     } else {
//         $('down').removeClass('animate__animated animate__bounce');
//     }
// });
// window.addEventListener('scroll', function (event) {
//     console.log('scroll', event);
// });

// $.fn.extend({
//     animateCss: function (animationName) {
//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         $(this).addClass('animated ' + animationName).one(animationEnd, function () {
//             $(this).removeClass('animated ' + animationName);
//         });
//     }
// });


// $(window).scroll(function () {
//     if ($(window).scrollTop() <= 300) {
//         $('#bounce').animateCss('bounce');
//         console.log('scroll');
//     }
// });

$(window).scroll(function () {
    $('.fade').each(function () {
        var imagePos = $(this).offset().top;
        var topofWindow = $(window).scrollTop();
        if (imagePos < topofWindow + 300) {
            console.log('scroll');
            $(this).addClass('animate__animated animate__fadeInDown');
        }
    });
});

$(window).scroll(function () {
    $('.fadeInLeft').each(function () {
        var imagePos = $(this).offset().top;
        var topofWindow = $(window).scrollTop();
        if (imagePos < topofWindow + 300) {
            console.log('scroll');
            $(this).addClass('animate__animated animate__fadeInLeft');
        }
    });
});

$(window).scroll(function () {
    $('.fadeInRight').each(function () {
        var imagePos = $(this).offset().top;
        var topofWindow = $(window).scrollTop();
        if (imagePos < topofWindow + 300) {
            console.log('scroll');
            $(this).addClass('animate__animated animate__fadeInRight');
        }
    });
});