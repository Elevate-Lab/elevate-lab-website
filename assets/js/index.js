(function(global){
    var mode = global.localStorage.getItem("mode") || '';

if(mode==='')
{
window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {
    if (e.matches) {
      console.log('dark mode is enabled');
      mode = 'dark';
    } else {
      console.log('dark mode is disabled');
      mode = 'light';
    }
  });
}
console.log(mode);

var uri = document.documentURI;
var docname = (uri.substring(uri.length-10,uri.length-5)); // check if page is index.html

var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
if(link!==''){
    if(docname==="index")                       // check if the doc is index.html
    {
        link.href = 'assets/css/'+mode+'.css'; 
    }
    else
    {
        link.href = '../css/'+mode+'.css';
    }
    head.appendChild(link);
}

global.localStorage.setItem("mode",mode);

var toggleButton = document.getElementById("toggle");
if(mode === 'dark')
    toggleButton.checked = true;

toggleButton.addEventListener("click", function(){
    console.log("clicked");
    if(mode === 'dark'){
        if(docname === "index"){                // check if the doc is index.html
        link.href = 'assets/css/light.css'; 
        }
        else{
            link.href='../css/light.css';
        }
        mode = 'light';
    }
    else{
        if(docname === "index"){
            link.href = 'assets/css/dark.css'; }
        else{link.href='../css/dark.css';}
        mode = 'dark';
    }
    global.localStorage.setItem("mode",mode);
})

}(window))