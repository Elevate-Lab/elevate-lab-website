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
var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
if(link!==''){
    link.href = '/assets/css/'+mode+'.css'; 
    head.appendChild(link);
}

global.localStorage.setItem("mode",mode);

var toggleButton = document.getElementById("toggle");
if(mode === 'dark')
    toggleButton.checked = true;

toggleButton.addEventListener("click", function(){
    console.log("clicked");
    if(mode === 'dark'){
        link.href = '/assets/css/light.css';
        mode = 'light';
    }
    else{
        link.href = '/assets/css/dark.css';
        mode = 'dark';
    }
    global.localStorage.setItem("mode",mode);
})

}(window))