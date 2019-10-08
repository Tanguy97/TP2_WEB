function deletePublication(){
    $(this).parent().parent().remove()
}

function addAuthor(){
    $("form > div.author-input").append("<input type='text' name='authors[]' placeholder='Auteurs' minlength='5' required=''>")
    $("form > div.author-input").append("<i class='fa fa-minus fa-3x remove-author'></i>")
}

//Supression d'une publication
$(".del-icon").click(deletePublication)

//Ajout d'un auteur
$(".add-author > i").click(addAuthor)
