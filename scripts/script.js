function contacto(){
    var nombre = document.form_contacto.nombre.value
    var apellido = document.form_contacto.apellido.value 
    var dni = document.form_contacto.dni.value 
    var email = document.form_contacto.email.value 
    var telefono = document.form_contacto.telefono.value 
    //console.log(nombre,apellido,dni,email,telefono)
    if(nombre==""){
        document.getElementById("error").innerHTML = "El campo Nombre es obligatorio"
        return;
    }else{
        document.getElementById("error").innerHTML = ""
    }
    if(apellido==""){
        document.getElementById("error").innerHTML = "El campo Apellido es obligatorio"
        return;
    }else{
        document.getElementById("error").innerHTML = ""
    }
    if(email==""){
        document.getElementById("error").innerHTML = "El campo Email es obligatorio"
        return;
    }else{
        document.getElementById("error").innerHTML = ""
    }
    if(telefono==""){
        document.getElementById("error").innerHTML = "El campo Telefono es obligatorio"
        return;
    }else{
        document.getElementById("error").innerHTML = ""
    }
    document.getElementById("respuesta").innerHTML = "Nos contactaremos a la brevedad. Gracias por el contacto."
}
function tipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro_id").value
    //console.log(tipoSeguro)
    
    switch(tipoSeguro){
        case "1":
            var precio="$500"
            break;
        case "2":
            var precio="$1000"
            break;
        case "3":
            var precio="$1500"
            break;
    }
    document.getElementById("precioSeguro").innerHTML="Precio: " + precio
}
tipoSeguro();