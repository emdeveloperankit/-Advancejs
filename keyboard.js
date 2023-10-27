const insert=document.getElementById('insert');

window.addEventListener('keydown',(evn)=>{
 insert.innerHTML=`
 <div id="card">
 
 <style>
 table,tr,th,td{
  border:2px solid red;
 
 }
 </style>
<table style="border:2px solid black";>
<tr>
<th>key</th>
<th>keyCode</th>
<th>code</th>
</tr>

<tr>
<td>${evn.key==='' ?'Space':evn.key}</td>
<td>${evn.keyCode}</td>
<td>${evn.code}</td>
</tr>
</table>

</div>`
;
});