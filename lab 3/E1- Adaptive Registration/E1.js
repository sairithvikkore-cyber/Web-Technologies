f.onsubmit=x=>{
x.preventDefault()
let ok=true
if(!e.value.includes("@vitap.ac.in")) ok=false
if(r.value=="Admin" && p.value.length<8) ok=false
if(p.value!=cp.value) ok=false
m.textContent=ok?"Valid":"Invalid"
}
