function validate() { 
       //
    const myform = document.getElementById("myform");
    myform.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log("EL CODIGO SE PUSO BIEN");});
    //  
    var OUTLET = document.getElementById("OUTLET").value;
    var oldp = 800;
    console.log(OUTLET);
    var a ;
    codigos = new Object();
codigos.OUTLETUKL3="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETUBF5="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETKBH8="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETHDNC="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETZFLC="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETDB83="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETGDE4="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETYP52="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETUFDK="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET4GLL="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETCSMM="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETZQ3G="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETNZ6D="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETJBES="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET6ZMN="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET6D2U="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETB2D7="3% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETMBP7="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETTJ2Z="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETX5QN="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET5WN6="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETKFUE="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET5H8X="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETKNN9="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETPW6S="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETJPK9="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETBRGX="5% de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETXCFR="10 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET5SRQ="10 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET47PE="10 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET2GZX="10 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLET85ED="10 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETMRHL="15 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETHTNF="15 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETD2XC="15 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETJ7HQ="15 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETN37P="15 % de descuento en toda la compra mayor a $120.000";	
codigos.OUTLETD9Y4="30 % de descuento en toda la compra mayor a $120.000";	
    
    if (codigos[OUTLET]) 
     { 
         console.log("OUTLET validado");
         var descuento = codigos[OUTLET];
         var c = descuento;
        document.getElementById("new_price").innerHTML = c ;
        document.getElementById("h3").innerHTML = c ;
} 
    else 
     { 
     	 document.getElementById("new_price").innerHTML = "CODIGO INCORRECTOS" ;
     } 
    } 