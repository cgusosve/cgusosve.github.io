var ultCarg;

window.onload = function(){
    if (!setMenu()) return;
    //window.addEventListener("scroll", function () {scrollEnd()}, false);
    document.addEventListener(
        'scroll',
        (event) => {
            scrollEnd();
        }, 
        { passive: true }
    );
    window.addEventListener("scroll", reveal);
    ultCarg = "inicio";
};

function scrollEnd() {
    if (document.documentElement.scrollHeight <= window.innerHeight + window.pageYOffset + 1) 
    {
        if (ultCarg === "inicio") //if(document.getElementById("inicio").classList.contains("active"))
        {
          scrollNext("aboutme");
          return;
        }
        if (ultCarg === "aboutme") //if(document.getElementById("aboutme").classList.contains("active"))
        {
          scrollNext("expLaboral");
          return;
        }
        if (ultCarg === "expLaboral") //if(document.getElementById("expLaboral").classList.contains("active"))
        {
          scrollNext("contacto");
          return;
        }
    }
}

function scrollNext(pagina) {
  ultCarg = pagina;
  request=new XMLHttpRequest();
  request.overrideMimeType('text/xml');
  request.onload = function(){
    var d = document.createElement("div");
    d.innerHTML = request.responseText;
    document.getElementById("content").appendChild(d);
  };
  request.open("GET","html/"+pagina+".html");
  request.send(null);
}

function setMenu() {
    document.getElementById("inicio").addEventListener("click", function(){pageOpenFuncion("inicio")});
    document.getElementById("inicio-sm").addEventListener("click", function(){pageOpenFuncion("inicio")});
    document.getElementById("aboutme").addEventListener("click", function(){pageOpenFuncion("aboutme")});
    document.getElementById("aboutme-sm").addEventListener("click", function(){pageOpenFuncion("aboutme")});
    document.getElementById("expLaboral").addEventListener("click", function(){pageOpenFuncion("expLaboral")});
    document.getElementById("expLaboral-sm").addEventListener("click", function(){pageOpenFuncion("expLaboral")});
    document.getElementById("contacto").addEventListener("click", function(){pageOpenFuncion("contacto")});
    document.getElementById("contacto-sm").addEventListener("click", function(){pageOpenFuncion("contacto")});
    pageOpenFuncion("inicio");
    return true;
}

function pageOpenFuncion(arg) {
  ultCarg = arg;
  request=new XMLHttpRequest();
  request.overrideMimeType('text/xml');

  request.onload = function(){
    document.getElementById("content").innerHTML = request.responseText;
  };
  
  request.open("GET","html/"+arg+".html",false);
  request.send(null); 
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


