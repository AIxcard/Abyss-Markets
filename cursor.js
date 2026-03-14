// Fix blank page when returning with back button
window.addEventListener("pageshow", function () {
document.body.style.opacity = "1"
})

// Create cursor
const cursor = document.createElement("div")
cursor.id = "aetherCursor"
document.body.appendChild(cursor)

// Style cursor
cursor.style.position = "fixed"
cursor.style.width = "18px"
cursor.style.height = "18px"
cursor.style.pointerEvents = "none"
cursor.style.borderRadius = "50%"
cursor.style.background = "linear-gradient(135deg,#38bdf8,#9333ea)"
cursor.style.boxShadow = "0 0 10px #38bdf8, 0 0 18px #9333ea"
cursor.style.zIndex = "9999"
cursor.style.transform = "translate(-50%,-50%)"

// Hide normal cursor
document.body.style.cursor = "none"

// Move cursor
document.addEventListener("mousemove", function(e){
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})
