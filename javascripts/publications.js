function deletePublication(){
    $(this).parent().parent().remove()
}

$(".del-icon").click(deletePublication)

function modifyUrl(){
    const url=new URL(document.location.href)
    const search_params=new URLSearchParams(url.search)
    const parametre=search_params.get('sort_by')
    const maValeur = (parametre == null) ? "date" : parametre
    search_params.set('sort_by',$(this).val())
    url.search=search_params
    document.location.href=url
}

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

actualiserPage();
$("#fieldFilterSection").change(modifyUrl)

