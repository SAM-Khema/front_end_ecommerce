var product = {
  async create({ title, category, imageUrl, desc, price }) {
    // const res = await fetch("http://localhost:3001/product/create", {
      const res = await fetch("https://samkhema-com.onrender.com/product/create", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, category, imageUrl, desc, price }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    // const res = await fetch("http://localhost:3001/product/all", {
      const res = await fetch("https://samkhema-com.onrender.com/product/all", {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        // Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  },
  async delete({id, title, category, imageUrl, desc, price}){
    await fetch(`https://samkhema-com.onrender.com/product/delete/`,{
            method: "POST",
            // credentials: "include",
            headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify({ _id:id, title, category, imageUrl, desc, price  }),
    });
    const result = await res.json();
    return result;
},
async getallproduct(categoryId){
    if(categoryId == ""){
            const res = await fetch('https://samkhema-com.onrender.com/product/all',{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // origin: 'http://localhost:3000'
                }
            })
            const result = res.json();
            return result
        }else{
            const res = await fetch(`https://samkhema-com.onrender.com/product/all/${categoryId}/${itemId}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // origin: 'http://localhost:3000'
                }
            })
            const result = res.json();
            return result
        }
},
async getallproduct(categoryId){
  if(categoryId == ""){
          const res = await fetch('https://samkhema-com.onrender.com/product/all',{
              method: 'GET',
              headers: {
                  'content-type': 'application/json',
                  // origin: 'http://localhost:3000'
              }
          })
          const result = res.json();
          return result
      }else{
          const res = await fetch(`https://samkhema-com.onrender.com/product/all/${categoryId}`,{
              method: 'GET',
              headers: {
                  'content-type': 'application/json',
                  // origin: 'http://localhost:3000'
              }
          })
          const result = res.json();
          return result
      }
},
async update({id, title, category, item, imageUrl, desc}){
  const res= await fetch(`https://samkhema-com.onrender.com/product/update/`,{
            method: "POST",
            // credentials: "include",
            headers: {
                    "Content-type": "application/json",
                    // Origin: "http://localhost:3000",
            },
            body: JSON.stringify({_id:id, title, category, item, imageUrl, desc}),
    });
    const result = await res.json();
    return result;
},
 
}

export default product
