const botones= document.querySelector (".btnDetalle");
botones.forEach(function(boton){
    boton.addEvenListener("click", function(){
        const detalle = boton.nextElementSibling;
        if(detalle.hidden){
            detalle.hidden = false;
            boton.textContent = "ocultar detalles";
        } else {
            detalle.hidden = true;
            boton.textContent = "Ver Detalles";
        }
    });



});