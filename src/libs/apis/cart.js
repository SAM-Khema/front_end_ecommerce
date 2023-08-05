var cart = {
    async create({ product, quantity, price, total }) {
      // const res = await fetch("http://localhost:3001/cart/create", {
        const res = await fetch("https://samkhema-com.onrender.com/cart/create", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ product, quantity, price, total }),
      });
  
      const result = await res.json();
      return result;
    },
    async all() {
      // const res = await fetch("http://localhost:3001/cart/all", {
        const res = await fetch("https://samkhema-com.onrender.com/cart/all", {
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
    async delete({product, quantity, price, total}){
      // await fetch(`http://localhost:3001/cart/delete/`,{
        const res = await fetch("https://samkhema-com.onrender.com/cart/delete", {
              method: "POST",
              // credentials: "include",
              headers: {
                      "Content-type": "application/json",
              },
              body: JSON.stringify({ _id:id, product, quantity, price, total }),
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
  