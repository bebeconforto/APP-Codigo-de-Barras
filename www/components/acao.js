$(document).on("click","#alertaUm",function(){
      navigator.notification.alert("Mensagem de Alerta 1");
});

$(document).on("click","#alertaDois",function(){
      function retorno(){

      }
      navigator.notification.alert("Mensagem de alerta 2", retorno, "Aviso", "blz");
});
$(document).on("click","#alertaTres",function(){
      function onConfirm(buttonIndex){
        if(buttonIndex == 1){
          navigator.notification.alert('Escolheu a opção sim!');
        }else{
          navigator.notification.alert('Escolheu a opçao nao');
        }
      }
      navigator.notification.confirm("Escolha sim ou nao!",onConfirm,"Escolha", ['sim','nao']);
});
$(document).on("click", "#alertaQuatro", function(){
    navigator.notification.beep(2);
})