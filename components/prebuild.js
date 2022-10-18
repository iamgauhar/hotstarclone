function navbar(){
    return `<div id="left-nav">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#f9f9f9" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<line x1="21" x2="3" y1="18" y2="18"></line><line x1="21" x2="3" y1="12" y2="12"></line><line x1="21" x2="3" y1="6" y2="6"></line></svg>
    <div id="logo">
        <a href="/OTT platofrm/index.html"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="logo"></a>
    </div>
    <div id="menu">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        <ul>
            <a href="#">
                <li>TV</li>
            </a>
            <a href="#">
                <li>Movies</li>
            </a>
            <a href="#">
                <li>Sports</li>
            </a>
            <a href="#">
                <li>Disney+</li>
            </a>
            <a href="#">
                <li>KiDS</li>
            </a>
        </ul>
    </div>
</div>

<div id="right-nav">
    <div id="search">
        <div id="queryBox">
           <svg class="back-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="11 7 6 12 11 17"></polyline><line x1="6" y1="12" x2="18" y2="12"></line></svg>
        <!-- <svg class="back-btn" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 253, 253, 1);transform: ;msFilter:;"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg> -->
        <div class="parent-sb">
        <input type="search" name="search" id="search-box" placeholder="Search">
        <svg id="msb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#b9b8b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<circle cx="11" cy="11" r="9" fill="none"></circle><line x1="17.5" y1="17.5" x2="22" y2="22"></line></svg>

        </div> 
    </div>

    <div id="search-result">
        
    </div>
        

    </div>

    <div id="btn">
        <button id="subscribe">SUBSCRIBE</button>
        <button id="login-btn">LOGIN</button>
    </div>
    <svg id="dsb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#b9b8b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<circle cx="11" cy="11" r="9" fill="none"></circle><line x1="17.5" y1="17.5" x2="22" y2="22"></line></svg>

</div>

<div id="signform">
    <i class='bx bx-x' style='color:#fffefe'  ></i>
    <div id="socialLogin">
        <div>
            <h2>Login to continue.</h2>
        </div>
        <div>
            <button>Have a Facebook/Email account</button>
        </div>
    </div>
    <p>or</p>
    <div id="userlogin" class="formContainer">

        <form action="" id="loginForm" class="userform">
            <div>
                <span>+91</span>
                <input type="number" maxlength="10"  name="" id="phonenum" placeholder="Mobile Number">
            </div>
            <div>
                <span><i class='bx bx-key bx-flashing' style='color:#ffffff'  ></i></span>
                <input type="password" minlength="6" id="password" placeholder="Password"> 

            </div>
            <div>
                <input type="submit" name="" id="submit" value="CONTINUE">
                
            </div>
            
        </form>
        <p>Don't have account <span>CREATE HERE</span></p>

    </div>


    <div id="usersign" class="formContainer">
        <form action="" id="signupForm" class="userform">
            <div>
                <span>+91</span>
                <input type="number" minlength="10"  name="" id="newNum" placeholder="Enter Mobile Number">
            </div>
            <div>
                <span><i class='bx bxs-user'></i></span>
                <input type="text" id="newName" placeholder="Your Name"> 

            </div>
            <div>
                <span><i class='bx bx-key bx-flashing' style='color:#ffffff'  ></i></span>
                <input type="password" minlength="6" id="cPassword" placeholder="Password minimum length 6"> 

            </div>
            <div>
                <input type="submit" name="" id="newSubmit" value="Sign Up">
                
            </div>
            
        </form>
        <p>Already have account <span>LOGIN HERE</span></p>

    </div>
    
</div>`
}

export default navbar