$( ".infIpad" ).hide();
$( ".infGalaxy" ).hide();
$( ".infMoto" ).hide();
$( ".infZen" ).hide();


$(document).on("click", "#codigo", function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text == 280720550){
          $(".conteudo").hide();
          $(".infIpad").show();
        }
         else if(result.text == 989895555){
          $(".conteudo").hide();
          $(".infGalaxy").show();
        }
          else if(result.text == 85236987){
          $(".conteudo").hide();
          $(".infMoto").show();
        }
          else if(result.text == 85369877444){
          $(".conteudo").hide();
          $(".infZen").show();
        }
      },
      function (error) {
          alert("Falha no scan: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Coloce o código em frente a câmera!", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});