function deletePublication(){
    $(this).parent().parent().remove()
}

function addAuthor(){
    $(this).parent().before("<div class='new-authors'></div>")
    $("form > .new-authors:last").append("<div class='author-input'></div>")
    $("form .new-authors .author-input:last").append("<input type='text' name='authors[]' placeholder='Auteurs' minlength='5' required=''>")
    $("form > .new-authors:last").append("<div class='remove-author'></div>")
    $("form .new-authors .remove-author:last").append("<i class='fa fa-minus fa-3x'></i>")
    //Attache de l'évènement supprimer un auteur
    $(".remove-author:last > i").click(removeAuthor)

}

function removeAuthor(){
    console.log("hello")
    $(this).parent().parent().remove()
}

//Supression d'une publication
$(".del-icon").click(deletePublication)

//Ajout d'un auteur
$(".add-author > i").click(addAuthor)
