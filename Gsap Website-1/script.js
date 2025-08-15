function page1Animation() {
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.from("nav h1, nav h4, nav button", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
    })
        .from(".center-part1 h1", {
            x: -50,
            opacity: 0,
            duration: 0.8
        }, "-=0.3")
        .from(".center-part1 p", {
            x: -30,
            opacity: 0,
            duration: 0.6
        }, "-=0.5")
        .from(".center-part1 button", {
            scale: 0.8,
            opacity: 0,
            duration: 0.5
        }, "-=0.4")
        .from(".center-part2 img", {
            x: 50,
            opacity: 0,
            duration: 1
        }, "-=0.6")
        .from(".section1bottom img", {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1
        });

    // Hover animation for logos
    document.querySelectorAll(".section1bottom img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        img.addEventListener("mouseleave", () => {
            gsap.to(img, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });


    document.querySelectorAll(".part2 h4").forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                duration: 0.3,
                backgroundImage: "linear-gradient(currentColor, currentColor)",
                backgroundSize: "100% 2px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                ease: "power2.out"
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                duration: 0.3,
                backgroundSize: "0% 2px",
                ease: "power2.in"
            });
        });
    });




}
page1Animation();

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        }
    });

    tl2.fromTo(".services",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
    );

    tl2.fromTo(".elem.line1.left",
        { x: -200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8 },
        "row1"
    );

    tl2.fromTo(".elem.line1.right",
        { x: 200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8 },
        "row1"
    );

    tl2.fromTo(".elem.line2.left",
        { x: -200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8 },
        "row2"
    );

    tl2.fromTo(".elem.line2.right",
        { x: 200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8 },
        "row2"
    );



    document.querySelectorAll(".elem").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });

    });

    document.querySelectorAll(".cp1-button").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });

        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });

        })
    })
    document.querySelectorAll(".downcontainer button").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });

        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });

        })
    })





    gsap.registerPlugin(ScrollTrigger);

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".downcontainer",
            scroller: "body",
            start: "top 80%", // starts when top of element hits 80% viewport
            end: "top 50%",   // optional end point
            scrub: 1,
        }
    });

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".casestudy",
            scroller: "body",
            start: "top 80%",
            end: "top 30%",
            scrup: 1,
        }
    })



    tl3.from(".downcontainer", {
        x: 300,
        opacity: 0,
        duration: 1
    });

    gsap.registerPlugin(ScrollTrigger);

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".footercontainer",
            scroller: "body",
            start: "top 80%", // starts when top of element hits 80% viewport
            end: "top 50%",   // optional end point
            scrub: 1,
        }
    });
    tl3.from(".footercontainer", {
        x: -300,
        opacity: 0,
        duration: 1
    });

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".casestudy",
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
        }
    });

    tl2.fromTo(".casestudy",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
    );

    document.querySelectorAll(".part2 button").forEach((btn) => {
        let fillLayer = document.createElement("span");
        fillLayer.classList.add("fill-layer");
        btn.appendChild(fillLayer);

        btn.addEventListener("mouseenter", (e) => {
            let rect = btn.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            fillLayer.style.left = `${x}px`;
            fillLayer.style.top = `${y}px`;

            gsap.to(fillLayer, {
                width: Math.max(rect.width, rect.height) * 2,
                height: Math.max(rect.width, rect.height) * 2,
                duration: 0.4,
                ease: "power2.out"
            });

            gsap.to(btn, { color: "#fff", duration: 0.3 });
            gsap.to(btn, { borderColor: "#000", duration: 0.3 });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(fillLayer, {
                width: 0,
                height: 0,
                duration: 0.4,
                ease: "power2.in"
            });

            gsap.to(btn, { color: "#000", duration: 0.3 });
            gsap.to(btn, { borderColor: "#000", duration: 0.3 });
        });
    });




}
page2Animation()

function marqueAnimation() {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                duration: 4,
                ease: "none",
                repeat: -1
            })
            gsap.to(".marque img", {
                rotate: 180
            })
        } else {
            gsap.to(".marque", {
                transform: "translateX(0%)",
                duration: 4,
                ease: "none",
                repeat: -1
            })
            gsap.to(".marque img", {
                rotate: 0
            })
        }
    })


}
marqueAnimation()

function stringAnimation() {
    var initialPath = `M 10 100 Q 250 100 490 100`
    var finalPath = `M 10 100 Q 250 100 490 100`

    var string = document.querySelector(".string")

    string.addEventListener("mousemove", function (dets) {
        path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.3,
            ease: "power3.out"
        })
    })

    string.addEventListener("mouseleave", function () {
        gsap.to("svg path", {
            attr: { d: finalPath },
            duration: 1,
            ease: "elastic.out"
        })
    })
}
stringAnimation()

function cursor() {
    gsap.registerPlugin(ScrollTrigger);

    const cursor = document.querySelector(".cursor");
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    gsap.ticker.add(() => {
        posX += (mouseX - posX) * 0.15; // smoothing factor
        posY += (mouseY - posY) * 0.15;
        gsap.set(cursor, { x: posX, y: posY });
    });

    window.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    document.querySelectorAll(".downcontainer").forEach(container => {
        container.addEventListener("mouseenter", () => {
            gsap.to(cursor, { scale: 1.8, duration: 0.3, ease: "power2.out" });
        });
        container.addEventListener("mouseleave", () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });


}
cursor()

function breakText() {
    var h1 = document.querySelector(".logo")

    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var halfValue = splittedText.length / 2

    var clutter = ""

    splittedText.forEach(function (elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`
        }
        else {
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
    gsap.from(".a", {
        y: 80,
        duration: 0.6,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15
    })
    gsap.from(".b", {
        y: 80,
        duration: 0.6,
        delay: 0.5,
        opacity: 0,
        stagger: -0.15
    })
}
breakText()
