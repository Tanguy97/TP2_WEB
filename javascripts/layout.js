function header(){
    const url=new URL(document.location.href)
    const currentPage = document.createElement('style')

    if (url.href==url.origin+"/"){
        currentPage.innerHTML ="#home-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("home-link").appendChild(currentPage)
    }
    else if((new RegExp("/team")).test(url.href)){
        currentPage.innerHTML ="#team-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("team-link").appendChild(currentPage)
    }
    else if((new RegExp("/projects")).test(url.href)){
        currentPage.innerHTML ="#projects-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("projects-link").appendChild(currentPage)
    }
    else if((new RegExp("/publications")).test(url.href)){
        currentPage.innerHTML ="#publications-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("publications-link").appendChild(currentPage)
    }
}

//Selection dans le bandeau de navigation
header()
