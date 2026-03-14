// Fix back-button blank page
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide default cursor
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:36px;
height:36px;
pointer-events:none;
z-index:9999;
transform:translate(-4px,-2px);
}

#aetherCursor .arrow{
width:100%;
height:100%;

/* standard cursor shape */
clip-path:polygon(
0% 0%,
0% 100%,
30% 75%,
45% 100%,
60% 92%,
45% 68%,
100% 68%
);

background:linear-gradient(135deg,#38bdf8,#9333ea);

box-shadow:
0 0 6px #38bdf8,
0 0 12px #9333ea;

border:2px solid rgba(255,255,255,0.8);
border-radius:2px;
}
`
document.head.appendChild(style)

// Create cursor
const cursor = document.createElement("div")
cursor.id = "aetherCursor"

const arrow = document.createElement("div")
arrow.className = "arrow"

cursor.appendChild(arrow)
document.body.appendChild(cursor)

// Move cursor
document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})
