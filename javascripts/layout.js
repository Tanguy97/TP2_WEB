function header(){
    const url=new URL(document.location.href)

    if (url.href==url.origin+"/"){
        $('#home-link').addClass('link');
        $('#home-link').addClass('active');
    }
    else if((new RegExp("/team")).test(url.href)){
        $('#team-link').addClass('link');
        $('#team-link').addClass('active');
    }
    else if((new RegExp("/project")).test(url.href)){
        $('#projects-link').addClass('link');
        $('#projects-link').addClass('active');
    }
    else if((new RegExp("/publications")).test(url.href)){
        $('#publications-link').addClass('link');
        $('#publications-link').addClass('active');
    }
}

//Selection dans le bandeau de navigation
header()
