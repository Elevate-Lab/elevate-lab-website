$(document).ready(function(){
  $.getJSON( "../data/project.json", function( data ) {
      var items = [];
      for (i = 0; i < data["Projects"].length; i++) {
        if(i%3==0){
              val=data["Projects"][i];
              x="<div class='columns is-gapless'>";
              x=x+"<div class='column project-column'>";
              x=x+"<div class='project-card'>";
              x=x+"<div class='card-content project-info'><div class='project-img-container'><img src = ";
              x=x+"'"+val["img"]+"'";
              x=x+"/></div><div class='project-name-container'><h4 class='project-name'>"+val["title"];
              x=x+"</h4> <div class='break'></div><h6 class='project-description'>"+val["content"]+"</h6></div></div>";
              x=x+"<div class='card-content container'><div class='columns is-gapless'><div class='column'></div><div class='column text-center'>";
              x=x+"<h6 class='author-heading'>Author</h6><h6 class='author-name'>"+val["authorname"]+"</h6></div></div><div class='columns is-gapless'><div class='column is-half text-center'><a class='button view-project-button'><strong>View Project</strong>";
              x=x+"</a></div> <div class='column is-half text-center'><a class='social-links-a' href='#'><i class='fab fa-github'></i></a>  <a class='social-links-a' href='#'>";
              x=x+"<i class='fab fa-linkedin'></i></i> </a> </div></div></div></div>";
              x=x+"</div>";

              i=i+1;
              if(i+1<=data["Projects"].length){
                  val=data["Projects"][i];
                  x=x+"<div class='column project-column'>";
                  x=x+"<div class='project-card'>";
                  x=x+"<div class='card-content project-info'><div class='project-img-container'><img src = ";
                  x=x+"'"+val["img"]+"'";
                  x=x+"/></div><div class='project-name-container'><h4 class='project-name'>"+val["title"];
                  x=x+"</h4> <div class='break'></div><h6 class='project-description'>"+val["content"]+"</h6></div></div>";
                  x=x+"<div class='card-content container'><div class='columns is-gapless'><div class='column'></div><div class='column text-center'>";
                  x=x+"<h6 class='author-heading'>Author</h6><h6 class='author-name'>"+val["authorname"]+"</h6></div></div><div class='columns is-gapless'><div class='column is-half text-center'><a class='button view-project-button'><strong>View Project</strong>";
                  x=x+"</a></div> <div class='column is-half text-center'><a class='social-links-a' href='#'><i class='fab fa-github'></i></a>  <a class='social-links-a' href='#'>";
                  x=x+"<i class='fab fa-linkedin'></i></i> </a> </div></div></div></div>";
                  x=x+"</div>";
              }
              i=i+1;
              if(i+1<=data["Projects"].length){
                  val=data["Projects"][i];
                  x=x+"<div class='column project-column'>";
                  x=x+"<div class='project-card'>";
                  x=x+"<div class='card-content project-info'><div class='project-img-container'><img src = ";
                  x=x+"'"+val["img"]+"'";
                  x=x+"/></div><div class='project-name-container'><h4 class='project-name'>"+val["title"];
                  x=x+"</h4> <div class='break'></div><h6 class='project-description'>"+val["content"]+"</h6></div></div>";
                  x=x+"<div class='card-content container'><div class='columns is-gapless'><div class='column'></div><div class='column text-center'>";
                  x=x+"<h6 class='author-heading'>Author</h6><h6 class='author-name'>"+val["authorname"]+"</h6></div></div><div class='columns is-gapless'><div class='column is-half text-center'><a class='button view-project-button'><strong>View Project</strong>";
                  x=x+"</a></div> <div class='column is-half text-center'><a class='social-links-a' href='#'><i class='fab fa-github'></i></a>  <a class='social-links-a' href='#'>";
                  x=x+"<i class='fab fa-linkedin'></i></i> </a> </div></div></div></div>";
                  x=x+"</div></div>";
                  items.push(x);
              } 
      
        }

      } 
      $("#project-id").append(items);
  });
});