const BTN=document.getElementById('btn');
const BTNs=document.getElementById('btn1');

//generator a random color

const randomColor=function(){
 const hex="0123456789ABCDEF";
 let color ='#';
 for(let i=0;i<6;i++){
color+=hex[Math.floor(Math.random()*16)];
 }
 return color;
};
console.log(randomColor());

let intervalId;
const startingColor=function(){
 if(!intervalId){
 intervalId=setInterval(Bgcolor,1000);
 //navigator.clipboard.writeText(randomColor);
 };
 function Bgcolor(){
 document.body.style.backgroundColor=randomColor();
 }
};

const stopingColor=function(){
 clearInterval(intervalId);
 //null kar do
 intervalId=null;
 }
;
BTN.addEventListener('click',startingColor);


BTNs.addEventListener('click',stopingColor);


//const changer=function change(){
// document.body.style.backgroundColor="red";

//}
//changer();
//console.log(Math.floor(Math.random()*16));