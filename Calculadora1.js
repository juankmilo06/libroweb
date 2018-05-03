function suma(){
    var numero1=document.getElementById('cajaTexto1').value;
    var numero2=document.getElementById('cajaTexto2').value;
    var resultado=0;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resultado=parseInt(resultado);
    resultado= numero1+ numero2;
    
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function resta(){
    var numero1=document.getElementById('cajaTexto1').value;
    var numero2=document.getElementById('cajaTexto2').value;
    var resultado=0;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resultado=parseInt(resultado);
    resultado= numero1 - numero2;
    
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function multiplicacion(){
    var numero1=document.getElementById('cajaTexto1').value;
    var numero2=document.getElementById('cajaTexto2').value;
    var resultado=0;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resultado=parseInt(resultado);
    resultado= numero1 * numero2;
    
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function division(){
    var numero1=document.getElementById('cajaTexto1').value;
    var numero2=document.getElementById('cajaTexto2').value;
    var resultado=0;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resultado=parseInt(resultado);
    resultado= numero1 / numero2;
    
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
    
    if(numero1==0){
        alert("no se puede hacer la division")
    }  
    else{
        resultado=numero1/numero1;
        resultado=document.getElementById(resultado).value = resultado;
    }
        
    return false;
        
}
