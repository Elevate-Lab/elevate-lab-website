(function(global){
    var mode = global.localStorage.getItem("mode");

    window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {

        if (e.matches) {
        console.log('dark mode is enabled');
        mode = 'dark';
        } else {
        console.log('dark mode is disabled');
        mode = 'light';
        }
        colorTheme(mode);
        
    });

    console.log(mode);

    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link'); 
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    const fileName = location.href.split("/").slice(-1)[0];
        if(fileName==="" || fileName==="index.html")
            link.href="./assets/css/"+mode+".css";
        else
            link.href="../css/"+mode+".css";
    head.appendChild(link);

    global.localStorage.setItem("mode",mode);

    const toggleButton = document.getElementById("toggle");
    if(mode === 'dark')
        toggleButton.checked = true;
        
    toggleButton.addEventListener("click", function(){
        if(mode === 'dark'){
            mode = 'light';
            colorTheme('light');
        }
        else{
            mode = 'dark';
            colorTheme('dark');
        }
    });

    function colorTheme(pref){
        const name = location.href.split("/").slice(-1)[0];
        if(name==="" || name==="index.html")
            link.href="./assets/css/"+pref+".css";
        else
            link.href="../css/"+pref+".css";

        global.localStorage.setItem("mode",pref);
        if(mode === 'dark')
            toggleButton.checked = true;
        else    
            toggleButton.checked = false;
    }

}(window))
