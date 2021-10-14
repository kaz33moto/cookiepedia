function first(){
  var user = prompt("コードを入力してください。");
  if(user=="321"){

  }else{
    alert("コードが間違っています。")
    first();
  }
}
window.onload = first();
