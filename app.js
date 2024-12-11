const links = document.querySelectorAll(".nav-list > li a");
const cursor = document.querySelector("[data-cursor]");

// custom cursor

window.addEventListener("mousemove" , (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}`
    cursor.style.top = `${posY}`

    gsap.to(cursor, {
        duration: .5,
        x: posX,
        y: posY,
        ease: 'power2.out'
    })
});

window.addEventListener("click" , ()=> {
    gsap.to(cursor, {
        scale: 2,
        ease: 'power2.out',
        onComplete: ()=> {
            gsap.to(cursor, {
                scale:1,
                ease: 'power2.out'
            })
        }
    })
})

// smooth scrool links

links.forEach(link => {
    link.addEventListener("click", (e)=> {
        e.preventDefault()
        const target = link.getAttribute("href")// item.hash is the same 
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y:target,
                autoKill: true,
                onAutoKill: ()=> {
                    console.log("autokill")
                }
            },
            ease: "power2.out"
        })
    })
});


// 

