function insertJumbotron(texte) {
    const paragraphes=texte.description.split("\n")
    paragraphes.map(p => {
        $(".jumbotron").append(document.createElement("p"))
        $(".jumbotron > p:last-child").append(p)
    })
}

//Requête ajax pour obtenir la description de la page
$.get("http://localhost:3000/api/description","",insertJumbotron,'JSON')
