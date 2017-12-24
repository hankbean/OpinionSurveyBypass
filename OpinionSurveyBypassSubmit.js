javascript:(function () {

  var f1 = window.frames[0];
  var f2 = f1.window.frames[1];
  var f3 = f2.frames[1];

  var text = f3.document.getElementsByTagName("body")[0].innerHTML;

  var regex = /id.*(rdBtn.*5)" type/g;
  while ((m = regex.exec(text)) !== null ) {
    console.log(m);
    if(f3.document.getElementById(m[1]) !== null)
    f3.document.getElementById(m[1]).checked = true;
  } 

  var regex = /id.*?(rdBtn.*?Y)" type/g;
  while ((m = regex.exec(text)) !== null ) {
    console.log(m);
    if(f3.document.getElementById(m[1]) !== null)
    f3.document.getElementById(m[1]).checked = true;
  } 
            
  var regex = /id.*?(chk.*?)"/g;
  while ((m = regex.exec(text)) !== null ) {
    console.log(m);
    if(f3.document.getElementById(m[1]) !== null)
    f3.document.getElementById(m[1]).checked = true;
  }

  var regex = /id.*?(gvData.*?5)"/g;
  while ((m = regex.exec(text)) !== null ) {
    console.log(m);
    if(f3.document.getElementById(m[1]) !== null)
    f3.document.getElementById(m[1]).checked = true;
  }

  var regex = /id.*?(gvTeaTarget.*?5)"/g;
  while ((m = regex.exec(text)) !== null ) {
    console.log(m);
    if(f3.document.getElementById(m[1]) !== null)
    f3.document.getElementById(m[1]).checked = true;
  }

  f3.document.getElementById("txtAnsLike").value = "真的真的非常棒!";
  f3.document.getElementById('btnIns').click();
  
})();
