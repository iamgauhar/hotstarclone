let crrMovie=JSON.parse(localStorage.getItem("tempMovie")) 
let imgDiv=document.createElement("div")
let image=document.createElement("img")
image.src=crrMovie.imageUrl

let title=document.createElement("h1")
title.innerHTML=crrMovie.title
let type=document.createElement("p")
type.innerHTML=`Categoty : ${crrMovie.type}`
let year=document.createElement("p")
year.innerHTML=`Year : ${crrMovie.year}`


imgDiv.append(image)
document.querySelector("#card").append(imgDiv, title, type, year)

