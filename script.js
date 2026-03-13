const data={

roblox:{
title:"Roblox Games",
games:{

"Anime Spirits":[
{name:"Full Carry",price:"100 Baht",stock:"Service",desc:"Best soul + sword carry."}
],

"Verse Piece":[
{name:"2X Drop",price:"230 Baht",stock:"5",desc:"Permanent drop boost."},
{name:"Unlimited Bag",price:"100 Baht",stock:"4",desc:"Extra inventory."}
],

"Case Paradise":[
{name:"AWP Dragon Lore",price:"100 Baht",stock:"1",desc:"Factory New"}
],

"Anime Vanguards":[
{name:"Story Stage",price:"5 Baht",stock:"Service",desc:"Stage carry"}
],

"Anime Paradox":[
{name:"Sukuna Portal Carry",price:"120 Baht",stock:"5",desc:"Boss portal"}
],

"99 Nights In The Forest":[
{name:"100 Days Carry",price:"32 Baht",stock:"Service",desc:"Carry service"}
],

"Flee The Facility":[
{name:"Ancient Trident",price:"145 Baht",stock:"1",desc:"Hammer skin"}
],

"Rivals":[
{name:"Starter Bundle",price:"30 Baht",stock:"INF",desc:"Starter bundle"}
]

}
},

snacks:{
title:"Snacks",
items:[
{name:"Skittles",price:"23 Baht",stock:"3",desc:"Currently unavailable"},
{name:"Chips",price:"16 Baht",stock:"10",desc:"Currently unavailable"},
{name:"Chuppa Lollipop",price:"8 Baht",stock:"10",desc:"Currently unavailable"},
{name:"Beng Beng",price:"9 Baht",stock:"10",desc:"Available Monday"}
]
}

}

function openCategory(cat){

const panel=document.getElementById("panel")
const title=document.getElementById("panelTitle")
const content=document.getElementById("panelContent")

panel.classList.add("active")

title.innerText=data[cat].title

content.innerHTML=""

if(cat==="roblox"){

for(const game in data.roblox.games){

content.innerHTML+=`<div class="item" onclick="openGame('${game}')">${game}</div>`

}

}

else{

data.snacks.items.forEach(i=>{

content.innerHTML+=`

<div class="item" onclick="viewItem('${i.name}','${i.price}','${i.stock}','${i.desc}')">
${i.name}
</div>
`

})

}

}

function openGame(game){

const content=document.getElementById("panelContent")

content.innerHTML=""

data.roblox.games[game].forEach(i=>{

content.innerHTML+=`

<div class="item"
onclick="viewItem('${i.name}','${i.price}','${i.stock}','${i.desc}')">

${i.name}

</div>
`

})

}

function viewItem(n,p,s,d){

document.getElementById("details").classList.add("active")

document.getElementById("dName").innerText=n
document.getElementById("dPrice").innerText="Price: "+p
document.getElementById("dStock").innerText="Stock: "+s
document.getElementById("dDesc").innerText=d

}
