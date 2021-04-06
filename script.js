const APIURL="https://api.github.com/users/"
const main=document.getElementById("main")
async function gitHubProfile(name){
    const response=await fetch(APIURL+name)
    const data = await response.json()
    console.log(data)
    const newElm=document.createElement("div")
    newElm.classList.add("main")
    if (data.type!="User"){
        newElm.innerHTML="No Such GitHub user found"
    }else{
        newElm.innerHTML=`
    <div class="image">
        <a href="https://github.com/TheAkshayCoder" target="_blank"><img src="${data.avatar_url}" alt="image" srcset=""></a>
    </div>
    <div class="info">
                <h1 class="login">${data.login}</h1>
                <h3 class="created">${data.created_at}</h3>
                <h3 class="followers">followers:${data.followers}</h3>
                <h3 class="following">following:${data.following}</h3>
                <h3 class="subscription">subscription: 0</h3>
                <h3 class="subscription">repos: ${data.public_repos}</h3>
                <p class="bio">Bio:${data.bio}</p>
    </div>`
    }

    
    main.appendChild(newElm) 
}

const search=document.getElementById("search")
const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
    main.classList.add("active")
    main.innerHTML=""
    gitHubProfile(search.value)
    search.value=""
})


