var r={async create({name:e,desc:t,category:a}){return await(await fetch("http://localhost:3001/item/create",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:e,desc:t,category:a,imageUrl,price})})).json()},async all(){const t=await(await fetch("http://localhost:3001/item/all",{method:"GET",headers:{"Content-type":"application/json"}})).json();return t!=null&&t.length?t:[]},async update({id:e,name:t,desc:a,category:s}){return await(await fetch("http://localhost:3001/item/update/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({_id:e,name:t,desc:a,category:s})})).json()}};export{r as i};