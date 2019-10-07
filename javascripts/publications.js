function deletePublication(){
    $(this).parent().parent().remove()
}



$(".del-icon").click(deletePublication)
