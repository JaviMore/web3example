if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    }

    var version = web3.version.api;
    document.getElementById("libreria").innerHTML = version;
    

    web3.eth.getProtocolVersion(function(error, result){
    if(!error){
      document.getElementById("protocolo").innerHTML = result;
    }else{
        console.error(error);
    }
    })

    web3.version.getNode(function(error, result){
    if(!error){
      document.getElementById("nodover").innerHTML = result;
    }else{
        console.error(error);
    }
    })
    

    web3.eth.getBlockNumber(function(error, result){
    if(!error){
      document.getElementById("bloquesnum").innerHTML = result;
    }else{
        console.error(error);
    }
    })
    

    web3.eth.getAccounts(function(error, result){
    if(!error){
        var direcciones = " ";
        for(x in result){
          direcciones += result[x] + "<br/>"
        }
        document.getElementById("direcciones").innerHTML = direcciones;
    }else{
        console.error(error);
    }
    })

  

    function miraBalance() {
      var direccion = document.forms["formulario"]["direccion"].value;
      var ether = 0;
      if (direccion == "") {
          alert("Debes llenar la dirección");
          return false;
      }else{
        web3.eth.getBalance(direccion,function(error, result){
        if(!error){
          ether = web3.fromWei(result, 'ether');
          document.getElementById("balanceether").innerHTML = ether + " ETH";
        }else{
        console.error(error);
        }
        })
      }
    }
      
  (function (window, document) {
  document.getElementById('toggle').addEventListener('click', function (e) {
      document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
      document.getElementById('toggle').classList.toggle('x');
  });
  })(this, this.document);