let d = document.body.firstElementChild.nextElementSibling;
d.addEventListener("click" , function(){ document.body.firstElementChild.style.display = "block";
});

let f =  document.body.firstElementChild.firstElementChild.nextElementSibling;
f.addEventListener("click" , function(){document.body.firstElementChild.style.display="none";});