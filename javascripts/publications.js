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
    search_params.set(param,$(this).val())
    url.search=search_params
    document.location.href=url
    } 
}

function modifyUrlPage(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    search_params.set('page',$(this).attr('data-pagenumber'))
    url.search=search_params
    document.location.href=url   
}

function modifyUrlLimit(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    search_params.set('limit',$(this).val())
    search_params.set('page','1')
    url.search=search_params
    document.location.href=url   
}

//boo=true(next page) false previous page
function constructModifyUrlPage(boo){ 
    return function modifyUrl(){
        console.log(hello)
        const url=new URL(document.location.href)
        const search_params=new URLSearchParams(url.search)
        const page=search_params.get('page')
        const currentPage = (page == indefinded) ? "1" : page
        if(boo){
            console.log(currentPage)
            currentPage+=1
            console.log(currentPage)
        }
        else{
            console.log(currentPage)
            currentPage-=1
            console.log(currentPage)
        }
        search_params.set('page',currentPage)
        url.search=search_params
        document.location.href=url   
    }    
}

actualiserPage();
$("#fieldFilterSection").change(constructModifyUrl('sort_by'))
$("#filterAscValueSection").change(constructModifyUrl('order_by'))
$(".pagination .pagination-link").slice(1,4).click(modifyUrlPage)
$(".pagination .pagination-link .previous").click( constructModifyUrlPage(false))
$(".pagination .pagination-link .next").click( constructModifyUrlPage(true))
$("#elementsPerPageSection").change(modifyUrlLimit)

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
