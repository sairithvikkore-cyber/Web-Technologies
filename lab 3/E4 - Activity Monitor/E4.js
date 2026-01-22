let a=[],c=0
document.addEventListener("click",()=>rec("click"))
document.addEventListener("keydown",()=>rec("key"))
document.addEventListener("focus",()=>rec("focus"),true)
function rec(t){
a.push({t,tm:Date.now()})
c++
if(c>10) alert("Warning")
l.textContent=JSON.stringify(a,null,2)
}
r.onclick=()=>{
a=[]
c=0
l.textContent=""
}
