
<!DOCTYPE html>
<html>
<head>
	<title>Sample</title>
</head>
<body>

<div id="a"> 
     <div id="b"> 
      <button>button</button>

     </div>
</div>	

<script type="text/javascript">
  
let a1=document.querySelector("#a")
let a2=document.querySelector("#b)
a1.addEventListener("mousedown",event=>{
	console.log("Outer div")
});

a2.addEventListener("mousedown",event=>{
	console.log("inner div")
});
button.addEventListener("mousedown",event=>{
	if(event.button==2) event.stopPropagation();
});


</body>
</html>
