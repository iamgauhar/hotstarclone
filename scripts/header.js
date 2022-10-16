
import navbar from '../components/prebuild.js'

document.querySelector("header").innerHTML=navbar()


document.querySelector("#left-nav>svg").addEventListener("click", ()=>{
    document.querySelector("#menu").style.left="0"
})
document.querySelector("#menu>svg").addEventListener("click", ()=>{
    document.querySelector("#menu").style.left="-100%"
})
document.querySelector("#right-nav>svg").addEventListener("click", ()=>{
    document.querySelector("#search").style.left="0"
})
document.querySelector("#search>#queryBox>.back-btn").addEventListener("click", ()=>{
    document.querySelector("#search").style.left="-100%"
})


document.querySelector("#btn>button+button").addEventListener("click", ()=>{
    document.querySelector("#signform").style.left="50%"
})

document.querySelector("#signform>i").addEventListener("click", ()=>{
    document.querySelector("#signform").style.left="-100%"
})


document.querySelector("#userlogin>p>span").addEventListener("click", ()=>{
    document.querySelector("#usersign").style.display="block"
    document.querySelector("#userlogin").style.display="none"
})

document.querySelector("#usersign>p").addEventListener("click", ()=>{
    document.querySelector("#usersign").style.display="none"
    document.querySelector("#userlogin").style.display="block"
})

let userData=JSON.parse(localStorage.getItem("data")) || []



document.querySelector("#signupForm").addEventListener("submit", (e)=>{
    e.preventDefault()

    let moNumber=document.querySelector("#newNum").value
    let name = document.querySelector("#newName").value
    let cPass=document.querySelector("#cPassword").value

// //    console.log(checkForDuplicate(userData, moNumber))

//    function checkForDuplicate(arr, newData){
//     console.log(typeof newData)
//     arr.forEach(element => {
    
//         if(element.user != newData){
//             console.log(element.user)
//             return true;
//         }
//     }
    
//     );

// }
    
//     if(checkForDuplicate(userData, moNumber) == true){
//         console.log("esa")
//     }else{
//         alert("user already Exist")
//     }

    
    let user=new getUserData(name, moNumber,cPass)

    userData.push(user)
    localStorage.setItem("data",JSON.stringify(userData))
    let msg=document.createElement("p")
    msg.innerText="Sign Up successful Login Now"
    msg.style.color="#fff"
    msg.style.backgroundColor="#29A745"
    document.querySelector("#usersign").append(msg)
   

    function getUserData(name, n, p){
        this.name=name;
        this.number=n;
        this.password=p
    
    }

})


////////////////// Login  //////////////////////////////////

document.querySelector("#loginForm").addEventListener("submit", (e)=>{
    e.preventDefault()
    let lUser=document.querySelector("#phonenum").value
    let lPass=document.querySelector("#password").value

    userData.forEach(el => {
        if(el.number == lUser && el.password == lPass){
            document.querySelector("#login-btn").style.display="none"
            let msg=document.createElement("span")
            msg.innerHTML=`hi, ${el.name}`
            msg.style.color="#fff"
            msg.style.paddingLeft="8px"
            document.querySelector("#btn").append(msg)
            document.querySelector("#signform").style.left="-100%"
            // location.reload()
        }
        
    });
return false
})



function appendResult(result){
            document.querySelector("#search-result").innerHTML=''

    result.forEach(el =>{
        let resContainer=document.createElement("div")
        let imageDiv=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster
        let about = document.createElement("div")
        let title=document.createElement("h3")
        title.innerHTML=el.Title
        let type=document.createElement("p")
        type.innerHTML=`Type : ${el.Type}`
        let genre=document.createElement("p")
        genre.innerHTML=`Year : ${el.Year}`
        about.append(title, type, genre)
        imageDiv.append(image)
        resContainer.append(imageDiv, about)
        document.querySelector("#search-result").append(resContainer)

        resContainer.addEventListener("click", (el)=>{
            let tempres={
                imageUrl:el.Poster,
                title:el.Title,
                type:el.Type,
                year:el.Year
            }

            localStorage.setItem("tempMovie", JSON.stringify(tempres))
            location.href="../viewmovie.html"
        })
    })


}


async function searchMovies(){

    try{
        let query=document.querySelector("#search-box").value
        let response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=1c826e1e`)

        let data = await response.json()

        appendResult(data.Search)
    }
    catch(err){
        err_msg=document.createElement("h1").innerHTML="Movie Not Found"
        document.querySelector("#search-result").append(err_msg)
    }

}

document.querySelector("#search-box").addEventListener("change", ()=>{
    document.querySelector("#search-result").style.display = "block"
    searchMovies()
})

document.querySelector("body").addEventListener("click", (e)=>{
    // document.querySelector("#search-box").innerHTML =""
    e.target.value=''
    document.querySelector("#search-result").style.display = "none"
    
})
let timeID;
document.querySelector("#search-box").addEventListener("input", ()=>{
    debouncing(searchMovies())

})

function debouncing(search){
    if(timeID){
        clearTimeout(timeID)
    }

    timeID= setTimeout(function(){
        search
    },500)
}