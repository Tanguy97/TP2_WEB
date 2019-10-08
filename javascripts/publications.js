function deletePublication(){
    $(this).parent().parent().remove()
}

$(".del-icon").click(deletePublication)

function actualiserPage(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    const sortBy=search_params.get('sort_by')
    const orderBy=search_params.get('order_by')
    if(sortBy!=null){
        $("#fieldFilterSection").val(sortBy)
    }
    else $("#fieldFilterSection").val('date')
    if(orderBy!=null){
        $("#filterAscValueSection").val(orderBy)
    }
    else $("#filterAscValueSection").val('desc')
}

function constructModifyUrl(param){ 
    return function modifyUrl(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    //const parametre=search_params.get('sort_by')
    //const maValeur = (parametre == null) ? "date" : parametre
    search_params.set(param,$(this).val())
    url.search=search_params
    document.location.href=url
    } 
}
<<<<<<< HEAD
=======

>>>>>>> a441f9c61f7f07106394b6c90cfd35d9c731f759

function modifyUrlPage(){
    console.log("Hello")
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    search_params.set('page',$(this).dataset.pagenumber)
    url.search=search_params
    document.location.href=url   
}

//boo=true(page++) false page--
function constructModifyUrlPage(boo){ 
    return function modifyUrl(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    if(boo=true){
        const parametre=search_params.get('sort_by')
    }
    search_params.set('page',$(this).val())
    url.search=search_params
    document.location.href=url   
    } 
}

actualiserPage();
$("#fieldFilterSection").change(constructModifyUrl('sort_by',true))
$("#filterAscValueSection").change(constructModifyUrl('order_by',true))
$(".pagination .pagination-link").click(modifyUrlPage)
$("#elementsPerPageSection").change(constructModifyUrl('limit',true))

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
    $(this).parent().parent().remove()
}

//Supression d'une publication
$(".del-icon").click(deletePublication)

//Ajout d'un auteur
$(".add-author > i").click(addAuthor)
