function PromptDemo() {

    var Nombre = prompt("¿Cuál es tu Nombre?", "");
    
    if (Nombre != null){
    alert("Tu Nombre es " + Nombre);
    }
    else {
    alert("No has ingresado un nombre");
    location.reload()
    }
    }