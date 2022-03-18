$(document).ready(function(){

    //agregar numeros al display
    
    $("#uno").on("click",function(){
		$("#display").append("1");
	});

    $("#dos").on("click",function(){
		$("#display").append("2");
	});
    
    $("#tres").on("click",function(){
		$("#display").append("3");
	});

    $("#cuatro").on("click",function(){
		$("#display").append("4");
	});

    $("#cinco").on("click",function(){
		$("#display").append("5");
	});

    $("#seis").on("click",function(){
		$("#display").append("6");
	});

    $("#siete").on("click",function(){
		$("#display").append("7");
	});

    $("#ocho").on("click",function(){
		$("#display").append("8");
	});

    $("#nueve").on("click",function(){
		$("#display").append("9");
	});

    $("#cero").on("click",function(){
		$("#display").append("0");
	});

    $("#división").on("click",function(){
		$("#display").append("/");
	});

    $("#multi").on("click",function(){
		$("#display").append("*");
	});

    $("#resta").on("click",function(){
		$("#display").append("-");
	});
  
    $("#suma").on("click",function(){
		$("#display").append("+");
	});

    $("#punto").on("click",function(){ 
        
        let op= $("#display").text();
        //si ya existe un punto no se puede poner otro
        if (!op.includes('.')) $("#display").append("."); 
       
	});

    $("#reset").on("click",function(){
		resetear();
	});
    
    $("#igual").on("click",function(){
        let op= $("#display").text();
        let r = calcular(op);
       $("#display").text(r);
	});

    $("#borrar").on("click",function(){
        let op= $("#display").text();
        let r = borrar(op);
        $("#display").text(r);
	});

  });  
   //volviendo el valor de display a cero
    function resetear() {
    $("#display").html("");
    }
    
    //calculando operaciones metidas
    function calcular(op){
        return eval(op);
    }
    //borando caracter x caracter
    function borrar(op){
        return op.slice(0,-1);
    }

  
