
let images=[{"image":"https://picfiles.alphacoders.com/288/288260.jpg"},
{"image":"https://picfiles.alphacoders.com/167/167264.jpg"},
{"image":"https://www.bollywoodhungama.com/wp-content/uploads/2017/10/QaribQaribSingllebanner.jpg"},
{"image":"https://archive.org/download/movie-posters-wallpapers/Movie%20Poster%20105.jpg"}]

images.forEach((el, i) =>{
    let banner=document.createElement("img")
    let slidContainer=document.createElement("div")
    slidContainer.append(banner)
    document.querySelector("#slidshow").append(slidContainer)
    banner.src=el.image

    slidContainer.style.left= `${100*i}%`
    let counter=0
    setInterval(() => {
        if(counter=== images.length){
            counter=0;
        }
        slidContainer.style.transform=` translateX(-${100*counter}%) `
        counter++
    }, 4000);    
})

let movies=[
    {
        "name": "Trone Legacy",
        "realeseDate": "01/02/2013",
        "poster":"https://archive.org/download/movie-posters-wallpapers/Movie%20Poster%20100.jpg",
        "imdb": 9.8
    },
    {
        "name": "Black Mail",
        "realeseDate": "01/08/2018",
        "poster":"https://4.bp.blogspot.com/-1P2rJ7sRSzU/W725bVVQvpI/AAAAAAAACJs/dYfKSNNLRm8lSgB1Z-lIjToRNSahNoPggCLcBGAs/s1600/Blackmail%2B%25282018%2529.jpg",
        "imdb": 3.8
    },
    {
        "name": "Salt",
        "realeseDate": "05/05/2053",
        "poster":"https://archive.org/download/movie-posters-wallpapers/Movie%20Poster%20114.jpg",
        "imdb": 8.2
    },
    {
        "name": "Qarib Qarib Single",
        "realeseDate": "01/02/2021",
        "poster":"https://stat1.bollywoodhungama.in/wp-content/uploads/2017/10/Qarib-Qarib-Singlle-3-322x466.jpg",
        "imdb": 10
    },
    {
        "name": "Save the Earth",
        "realeseDate": "01/02/2013",
        "poster":"https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg?auto=compress&cs=tinysrgb&w=600",
        "imdb": 7.5
    },
    {
        "name": "Trone Legacy",
        "realeseDate": "01/02/2013",
        "poster":"https://archive.org/download/movie-posters-wallpapers/Movie%20Poster%20100.jpg",
        "imdb": 2.8
    },
    {
        "name": "Black Mail",
        "realeseDate": "01/08/2018",
        "poster":"https://4.bp.blogspot.com/-1P2rJ7sRSzU/W725bVVQvpI/AAAAAAAACJs/dYfKSNNLRm8lSgB1Z-lIjToRNSahNoPggCLcBGAs/s1600/Blackmail%2B%25282018%2529.jpg",
        "imdb": 4.8
    },
    {
        "name": "Salt",
        "realeseDate": "05/05/2053",
        "poster":"https://archive.org/download/movie-posters-wallpapers/Movie%20Poster%20114.jpg",
        "imdb": 7.2
    },
    {
        "name": "Qarib Qarib Single",
        "realeseDate": "01/02/2021",
        "poster":"https://stat1.bollywoodhungama.in/wp-content/uploads/2017/10/Qarib-Qarib-Singlle-3-322x466.jpg",
        "imdb": 5.8
    }
]



let getmeData = new Promise(function(resolve, reject){

    
setTimeout(() => {
    let data=movies
    if(data != null){
        resolve(data)
    }else{
        reject('ERR: server error')
    }
}, 5000);
})

getmeData.then(response => {
    displayContent(response)
}).catch(err => {
    console.log(err);
})

document.querySelector("#filter").addEventListener("change", ()=>{
    let selected=document.querySelector("#filter").value
    
    if(selected=="reset"){
        displayContent(movies)
    }
    if(selected=="asc"){
        
        movies.sort(function(a,b){
            return a.imdb - b.imdb
        })
        displayContent(movies)
        
    }
    if(selected=="dsc"){
        movies.sort(function(a,b){
            return b.imdb - a.imdb
        })
        displayContent(movies)
    }
})


function displayContent(movies){
    
    document.querySelector("#content").innerHTML=''
    let loader=document.querySelector("#loader").style.display='none'
        movies.forEach((el,i) =>{

            let itemContainer=document.createElement("div")
            let imageContainer=document.createElement("div")
            let image=document.createElement("img")
            image.src=el.poster
            imageContainer.append(image)
        
            let title=document.createElement("h1")
            title.innerHTML=(el.name).toUpperCase()
        
            let rating=document.createElement("p")
            rating.innerHTML="IMDB : "
        
            let rating_src=document.createElement("span")
            rating_src.innerText=el.imdb
            rating.append(rating_src)
            rating_src.style.fontWeight="bold"
        
            let date=document.createElement("p")
            date.innerHTML="Relesed On : "
        
            let relese=document.createElement("span")
            relese.innerText=el.realeseDate
        
            date.append(relese)
            itemContainer.append(imageContainer, title, rating, date)
            document.querySelector("#content").append(itemContainer)
        })
        
    }



