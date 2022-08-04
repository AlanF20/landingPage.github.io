const $ = (selector)=>{
  return document.querySelector(selector)
}

fetch(`http://localhost:3001`)
  .then(response => response.json())
  .then(data => {
    const img = $(".avatar")
    const user = $(".user")
    const userG = $(".userG")
    const repos = $(".repos")
    const location = $(".location")
    img.src = data.avatar_url
    user.innerHTML = data.name
    userG.innerHTML = `@${data.login}`
    repos.innerHTML = data.public_repos
    location.innerHTML = data.location
  })


 

