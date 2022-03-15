window.onload = dislexico;

//Mostrar botón cambio a disléxico
function dislexico(){
    document.body.style.fontFamily = "Fredoka";
    var boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","boton_dislexico");
    boton.setAttribute("onclick","cambiarFuente()");
    boton.innerHTML = "Con dislexia";

    var fuente = document.getElementById("dislexia");

    fuente.appendChild(boton);
}

//Mostrar botón cambio a no disléxico
function cambiarFuente(){
    document.body.style.fontFamily = "Dyslexic";
    document.body.style.fontSize = "100%";
    document.getElementById("boton_dislexico").remove();

    var boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","boton_no_dislexico");
    boton.setAttribute("onclick","devolverFuente()");
    boton.innerHTML = "Sin dislexia";

    var fuente = document.getElementById("dislexia");

    fuente.appendChild(boton);
}

function devolverFuente(){
    document.body.style.fontFamily = "Fredoka";
    document.body.style.fontSize = "100%";
    document.getElementById("boton_no_dislexico").remove();

    dislexico();
}
