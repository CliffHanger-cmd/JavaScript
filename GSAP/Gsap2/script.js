gsap.to('#page2 h1',{
    transform: "translateX(-180%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        marker: true,
        start: "top 0",
        end: 'top -100%',
        scrub: 2,
        pin:true,
    }
})
