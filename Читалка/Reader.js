var res = document.getElementById("main");
var back=0;
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
  let fullBook = reader.result;
  page = fullBook.split(' ');
  res.innerHTML = reader.result;
  }
}
function pageLoader(){
  let g=0;
  if(g==page.length-1){
  g=0;
  }
    else{
      g++
    }
    res.innerHTML = page[g];
    console.log(page);
}

let colorList = ["url('Back/list4.jpg')","url('Back/list5.jpg')","url('Back/list2.jpg')"];
  let i=0;
function changeBColor() {
  if (i==colorList.length-1){
  i=0;
   }
    else{
  i++}
  res.style.backgroundImage=colorList[i];
  }

let fontList = ["Arial","Arial Black","Courier","Georgia","Impact","Lucida Console","Marlett","MS Sans Serif","Palatino Linotype","Roman","Tahoma"];
let y=0;
function changeTextFont() {
  if (y==fontList.length-1){
    y=0;
     }
      else{
    y++}
  res.style.fontFamily = fontList[y];
}
let b=0;
let sizeList = ["15px","20px","30px","40px","50px"];
function changeTextSize() {
  if (b==sizeList.length-1){
    b=0;
     }
      else{
    b++}
    res.style.fontSize = sizeList[b];
}
let v=0;
let colorTextList = ["black","brown","grey","white"];
function changeTextColor() {
 if (v==colorTextList.length-1){
   v=0;
   }
      else{
    v++}
    res.style.color = colorTextList[v];
  }
  var sec = document.getElementById("container");
  var first = document.getElementById("first");
  var secondth = document.getElementById("second");
  var thirdth = document.getElementById("third");
  var fourth = document.getElementById("fourth");
  var fifth = document.getElementById("fifth");
  var sixth = document.getElementById("sixth");
  var seventh = document.getElementById("seventh");
  var eighth = document.getElementById("eighth");
  let skinImageList = ["url('Fon/skin1.jpg')","url('Fon/skin2.jpg')","url('Fon/skin3.jpg')","url('Fon/skin4.jpg')","url('Fon/skin5.jpg')"];
  let x=0;
  function changeSkin(){
   if (x==skinImageList-1){
     x=0;
     }
        else{
      x++}
    sec.style.backgroundImage = skinImageList[x];
    if(x==2||x==3){
      first.style.color='black';
      first.style.border='2px solid black';
      secondth.style.color='black';
      secondth.style.border='2px solid black';
      thirdth.style.color='black';
      thirdth.style.border='2px solid black';
      fourth.style.color='black';
      fourth.style.border='2px solid black';
      fifth.style.color='black';
      fifth.style.border='2px solid black';
      sixth.style.border='2px solid black';
      sixth.style.color='black';
      seventh.style.color='black';
      seventh.style.border='2px solid black';
      eighth.style.color='black';
      eighth.style.border='2px solid black';
      res.style.border='2px solid black';
      sec.style.border='2px solid black';
      }
        else{
      first.style.color='white';
      first.style.border='2px solid white';
      secondth.style.color='white';
      secondth.style.border='2px solid white';   
      thirdth.style.color='white';
      thirdth.style.border='2px solid white';
      fourth.style.color='white';
      fourth.style.border='2px solid white';
      fifth.style.color='white';
      fifth.style.border='2px solid white';
      sixth.style.border='2px solid white';
      sixth.style.color='white';
      seventh.style.color='white';
      seventh.style.border='2px solid white';
      eighth.style.color='white';
      eighth.style.border='2px solid white'; 
      res.style.border='2px solid white';
      sec.style.border='2px solid white';
        }
    }
  