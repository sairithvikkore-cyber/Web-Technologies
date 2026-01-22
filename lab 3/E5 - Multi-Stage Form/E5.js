let d={}
function n(x){
let v=document.getElementById("a"+x).value
if(!v) return
d["s"+x]=v
document.getElementById("s"+x).style.display="none"
document.getElementById("s"+(x+1)).style.display="block"
p.value=x
}
function f(){
if(!a4.value) return
p.value=4
alert(JSON.stringify(d))
}
