let arrayRegistros=[];

async function leenRegistros() {

    const respuesta = await fetch("data/registro.json");
    const registro = await respuesta.json();

    return registro;
}
 async function muestraRegistros() {

     try{
         arrayRegistros = await leenRegistros();
     }catch(e){
         console.log("Error generado: " +e);
     }
     console.log(arrayRegistros);

    arrayRegistros.forEach(function (item, index) {
        
    RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " , " + item.apellido + " , " + item.telefono + "<br>";//* Imprime los valores  
    
    });

   
 }

 muestraRegistros();
