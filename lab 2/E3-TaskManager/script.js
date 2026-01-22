function addTask(){
const d=document.createElement("div");
d.className="task";
d.draggable=true;
d.id="t"+Date.now();
d.ondragstart=e=>e.dataTransfer.setData("id",d.id);
d.innerText=tname.value+" - "+new Date().toLocaleDateString();
todo.appendChild(d);
tname.value="";
}
function drop(e){
const id=e.dataTransfer.getData("id");
const el=document.getElementById(id);
e.target.appendChild(el);
if(e.target.id==="done"){
el.style.background="lightgreen";
msg.innerText="Task Completed Successfully";
}
}
