function header(){
    const url=new URL(document.location.href)

    if (url.href==url.origin+"/"){
        $('#home-link').addClass('link');
        $('#home-link').addClass('active');
   }
    else if(url==url.origin+"/team"){
        $('#team-link').addClass('link');
        $('#team-link').addClass('active');
    }
    else if(url==url.origin+"/projects"){
        $('#projects-link').addClass('link');
        $('#projects-link').addClass('active');
    }
    else if(url==url.origin+"/publications"){
        $('#publications-link').addClass('link');
        $('#publications-link').addClass('active');
    }
}

//Selection dans le bandeau de navigation
header()