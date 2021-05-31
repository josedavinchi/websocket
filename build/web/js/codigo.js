/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(window, document, JSON){
    'use strict';
    var url = 'ws://'+ window.location.host+'/WebSocket/chat',  //+ window.location.host+
    ws = new WebSocket(url),
    mensajes = document.getElementById('conversacion'), 
    boton = document.getElementById('btnEnviar'),
    nombre = document.getElementById('usuario'),
    mensaje = document.getElementById('mensaje');
    console.log(url);
    ws.onopen = onOpen;
    ws.onclose = onClose;
    ws.onmessage = onMessage;
    ws.onerror = function(event) {
     console.error("Error en el WebSocket detectado:", event);
    };
    boton.addEventListener('click', enviar);
    
    function onOpen(){
        console.log('Conectado......');
    }
    function onClose(){
        console.log('Desconectado...');
    }
    function enviar(){
        var msg = {
          nombre:nombre.value,
          mensaje:mensaje.value
        };
        
        ws.send(JSON.stringify(msg));
    }
    
    function onMessage(evt){
        var obj = JSON.parse(evt.data),
            msg = 'Nombre: '+ obj.nombre + ' dice: ' + obj.mensaje;
        mensajes.innerHTML += ' <br/>'+msg;
        
    }
    
})(window, document, JSON);


