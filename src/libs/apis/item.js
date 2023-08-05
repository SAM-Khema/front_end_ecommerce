var item = {
  async create({ name, desc, category }) {
    const res = await fetch("http://localhost:3001/item/create", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, category,imageUrl,price }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/item/all", {
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
  }
  ,
  async update({ id,name, desc, category }) {
    const res = await fetch(`http://localhost:3001/item/update/`, {
            method: "POST",
            // credentials: "include",
            headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify({_id:id, name, desc, category }),
    });

    const result = await res.json();
    return result;
},
}

export default item
