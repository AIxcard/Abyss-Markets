// Fix blank page when returning with back button
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide normal cursor
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:24px;
height:24px;
pointer-events:none;
z-index:9999;
transform:translate(-4px,-3px);
}
`
document.head.appendChild(style)

// Create cursor
const cursor = document.createElement("div")
cursor.id = "aetherCursor"

cursor.innerHTML = `
<svg viewBox="0 0 32 32" width="24" height="24">

<defs>

<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="#38bdf8"/>
<stop offset="50%" stop-color="#6366f1"/>
<stop offset="100%" stop-color="#9333ea"/>
</linearGradient>

<filter id="glow">
<feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#6366f1"/>
<feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#9333ea"/>
</filter>

</defs>

<path d="
M2 2
L2 28
L10 20
L14 30
L18 28
L14 18
L26 18
Z"
fill="url(#grad)"
stroke="#4c1d95"
stroke-width="2"
stroke-linejoin="round"
filter="url(#glow)"
/>

<path d="M6 6 L12 18" stroke="#c4b5fd" stroke-width="1.3" opacity="0.8"/>
<path d="M8 7 L15 16" stroke="#a78bfa" stroke-width="1" opacity="0.7"/>

</svg>
`

document.body.appendChild(cursor)

// Cursor movement
document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})
