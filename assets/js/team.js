$(document).ready(function(){
    $.getJSON( "../data/data.json", function( data ) {
        var items = [];

        for (i = 0; i < data["Maintainers"].length; i++) {
            if(i%3==0){
                val=data["Maintainers"][i];
                x="<div class='columns is-gapless'>";
                x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                x=x+"'"+val["img"]+"'";
                x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                
                i=i+1;
                if(i<data["Maintainers"].length){
                    val=data["Maintainers"][i];
                    console.log(i);
                    x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                    x=x+"'"+val["img"]+"'";
                    x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                    x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                    x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                    x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                }

                i=i+1;
                if(i<data["Maintainers"].length){
                    val=data["Maintainers"][i];
                    x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                    x=x+"'"+val["img"]+"'";
                    x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                    x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                    x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                    x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                    x=x+"</div>";
                }  else{
                    x=x+"</div>";
                }
                items.push(x);
            }
        }
        $("#Maintainers").append(items);

        items = [];
        for (i = 0; i < data["Contributors"].length; i++) {
            if(i%3==0){
                val=data["Contributors"][i];
                x="<div class='columns is-gapless'>";
                x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                x=x+"'"+val["img"]+"'";
                x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                
                i=i+1;
                if(i<data["Contributors"].length){
                    val=data["Contributors"][i];
                    x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                    x=x+"'"+val["img"]+"'";
                    x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                    x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                    x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                    x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                }
                
                i=i+1;
                if(i<data["Contributors"].length){
                    val=data["Contributors"][i];
                    x=x+"<div class='column'><div class='card'><div class='card-content info'><div class='img-container'><img src = ";
                    x=x+"'"+val["img"]+"'";
                    x=x+"/></div><div class='name-container'><h4 class='name'>"+val["firstname"];
                    x=x+"</h4><h4 class='name'>"+val["lastname"]+"</h4><div class='break'></div></div></div><div class='card-content social-links'><a href=";
                    x=x+val["github"]+"><i class='fab fa-github'></i></a><a href="+val["linkedin"];
                    x=x+"><i class='fab fa-linkedin'></i></a><a href="+val["twitter"]+"><i class='fab fa-twitter'></i></a></div></div></div>";
                    x=x+"</div>";
                } else{
                    x=x+"</div>";
                }
                items.push(x);
            }
        }
        
        $("#Contributors").append(items);

    });
});