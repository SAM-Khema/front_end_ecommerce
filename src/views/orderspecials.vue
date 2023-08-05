<!-- <script>
import headerVue from '@/components/header.vue';
import FooterView from '../components/footer.vue';
export default{
    components: {
      headerVue,
      FooterView}
    ,data() {
    return {
      categories: [],
      items: [],
      title: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      quantity:1,
    }
}
,
methods:{
  callFunction: function () {
   
   var currentDate = new Date();
   console.log(currentDate);
  }
},
  async mounted() {
    this.items = JSON.parse(localStorage.getItem("item") || '[]')
    console.log(localStorage.item);
    this.callFunction()
},
}
</script>
<template>
  <headerVue/>
  <div class="cart">
    <div class=" text-2xl font-bold pl-36 pt-4">
        <h1>My Orders</h1>
    </div>
    <br>
    <div class="flex justify-evenly">
      <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
        </tr>
        <tr class="h-48">
            <td><img alt="" class="h-48" :src="items.imageUrl" /></td>
            <td>1</td>
            <td>{{ items.price }}</td>
            <td> </td>
        </tr>
        </table>
        
    </div>
    <FooterView />
  </div>
  </template>
  <style>
  @media (min-width: 1024px) {
    .product {
      min-height: 100vh;
      /* display: flex; */
    }
    table {
    margin-left: 150px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    }

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }
  }
  </style>
   -->