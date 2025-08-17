let form=document.getElementById("myForm");
form.addEventListener("submit",function(event){
event.preventDefault();
let message=(`
<div style='background-color: black; padding:10px; color:white;'>
<h1>"Welcome ${document.getElementById("name").value} you are ${document.getElementById("age").value} years old, and your favorite hobby is ${document.getElementById("favoriteHobby").value}."</h1>
</div>
`);
document.getElementById("show").onclick = document.write(message);
});


