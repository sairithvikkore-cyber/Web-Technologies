let a=[]
function add(){
a.push({n:n.value,p:+p.value,q:+q.value})
r()
}
function r(){
let s=0
c.innerHTML=""
a.forEach(x=>{
let d=x.p*x.q
if(x.q>5) d*=0.9
s+=d
c.innerHTML+=`<li>${x.n} ${d}</li>`
})
t.textContent=s
}
