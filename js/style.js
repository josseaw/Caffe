$(document).ready(function() {
    gsap.to('span:nth-child(2)', {
        scrollTrigger: {
            trigger: 'span:nth-child(2)',
            start: "top 150px",
            end: "bottom bottom",
            markers: false
        },
        rotation: -325,
        opacity: 1
    });

    gsap.to('span:nth-child(3)', {
        scrollTrigger: {
            trigger: 'span:nth-child(3)',
            start: "top 80%",
            end: "bottom bottom",
            markers: false
        },
        rotation: -325,
        opacity: 1
    });

    gsap.to('span:nth-child(4)', {
        scrollTrigger: {
            trigger: 'span:nth-child(4)',
            start: "top 80%",
            end: "bottom bottom",
            markers: false
        },
        rotation: -325,
        opacity: 1
    });

    // scroll animation
    AOS.init({
        duration: 1500
    });
});