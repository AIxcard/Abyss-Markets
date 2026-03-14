// Fix blank page when returning with back button
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide default cursor everywhere
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:46px;
height:46px;
pointer-events:none;
z-index:9999;
transform:translate(-8px,-6px) rotate(14deg);
}

#aetherCursor .arrow{
position:absolute;
width:100%;
height:100%;

clip-path:polygon(
0 0,
100% 48%,
60% 58%,
68% 100%,
0 0
);

background:linear-gradient(135deg,#38bdf8,#9333ea);

box-shadow:
0 0 10px #38bdf8,
0 0 22px #9333ea;
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

// Cursor movement
document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})
