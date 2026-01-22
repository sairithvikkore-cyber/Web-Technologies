let q=[
{t:"text",r:true},
{t:"radio",o:["M","F"],r:true},
{t:"checkbox",o:["A","B"]}
]
q.forEach((x,i)=>{
let d=document.createElement("div")
if(x.t=="text") d.innerHTML=`<input id="q${i}">`
if(x.t=="radio") x.o.forEach(o=>d.innerHTML+=`<input type="radio" name="r${i}">${o}`)
if(x.t=="checkbox") x.o.forEach(o=>d.innerHTML+=`<input type="checkbox">${o}`)
f.appendChild(d)
})
f.innerHTML+='<button>Submit</button>'
f.onsubmit=e=>{
e.preventDefault()
m.textContent="Submitted"
}
