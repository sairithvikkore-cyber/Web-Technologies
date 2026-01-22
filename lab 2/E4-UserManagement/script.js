let users=JSON.parse(localStorage.getItem("users")||"[]");
show();

function saveUser(e){
e.preventDefault();
if(!name.value||!email.value||!mobile.value||!password.value)return;
if(mobile.value.length!=10)return;
if(password.value.length<6)return;
if(users.find(u=>u.email==email.value))return;
users.push({name:name.value,email:email.value,mobile:mobile.value,password:password.value});
localStorage.setItem("users",JSON.stringify(users));
show();
}

function show(){
list.innerHTML="";
users.forEach((u,i)=>{
const r=document.createElement("tr");
r.innerHTML=`<td>${u.name}</td><td>${u.email}</td><td>${u.mobile}</td><td><button onclick="del(${i})">Delete</button></td>`;
list.appendChild(r);
});
}

function del(i){
users.splice(i,1);
localStorage.setItem("users",JSON.stringify(users));
show();
}

function clearAll(){
localStorage.clear();
users=[];
show();
}
