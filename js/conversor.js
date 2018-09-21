
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        }
    
    
    var version = web3.version.api;
    console.log(version);
    function convierte() {
        var cantidad = document.forms["formulario"]["cantidad"].value;
        var cantidad2 = document.forms["formulario"]["cantidad2"].value;
        var ether = 0;
        if (cantidad !=	 "" ) {
            ether = web3.fromWei(cantidad, 'ether');
            document.forms["formulario"]["cantidad2"].value = ether;
        } else if(cantidad2 != ""){
            ether = web3.toWei(cantidad2, 'ether');
            document.forms["formulario"]["cantidad"].value = ether;
        }else{
            alert("Debes indicar la cantidad");
            return false;
       
         
        }
      }

      function limpiar(){
        var cantidad = document.forms["formulario"]["cantidad"].value = "";
        var cantidad2 = document.forms["formulario"]["cantidad2"].value = "";
      }