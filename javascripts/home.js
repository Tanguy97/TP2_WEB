function header(){
    const url=new URL(document.location.href)
    const currentPage = document.createElement('style')

    if (url.href==url.origin+"/"){
        currentPage.innerHTML ="#home-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("home-link").appendChild(currentPage)
    }
    else if(url==url.origin+"/team"){
        currentPage.innerHTML ="#team-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("team-link").appendChild(currentPage)
    }
    else if(url==url.origin+"/projects"){
        currentPage.innerHTML ="#projects-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("projects-link").appendChild(currentPage)
    }
    else if(url==url.origin+"/publications"){
        currentPage.innerHTML ="#publications-link{background: var(--link-active-background-color); color: var(--nav-lang-background-color); border-radius: .25rem;}"
        document.getElementById("publications-link").appendChild(currentPage)
    }
}

function insertJumbotron(texte) {
    const paragraphes=texte.description.split("\n")
    paragraphes.map((p,i) => {
        const index=i+1
        $(".jumbotron").append(document.createElement("p"))
        $(".jumbotron > p:nth-child("+index+")").append(p)
    })
}

header()

$.get("http://localhost:3000/api/description","",insertJumbotron,'JSON')
