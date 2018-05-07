function op(){
    
    var a = document.getElementById('text1').value;
    var b = document.getElementById('text2').value;
    var c = document.getElementById('text3').value;
    var x1 = 0;
    var x2 = 0;
    var d = (a,b,c);
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    
    
    if (d<0){
        alert ('tiene raices imaginarias');
    }
    else{
        
       x1 = (-b +(Math.sqrt((b*b)-(4*a*c))))/(2*a);
       x2 = (-b -(Math.sqrt((b*b)-(4*a*c))))/(2*a);
        
        alert ('El resultado de la Raiz en x1 es: '+ x1 + ' y en x2 es: '+ x2);
    }
    
    return false;
}