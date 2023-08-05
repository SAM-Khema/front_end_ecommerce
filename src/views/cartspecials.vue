<script>
import headerVue from '@/components/header.vue';
import FooterView from '../components/footer.vue';
export default {
  components: {
    headerVue,
    FooterView}
  ,
    data() {
    return {
      categories: [],
      products: [],
      title: "",
      items:[],
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      quantity:1,
    }
}
,
  methods:{
    increment() {
      this.quantity++
    },
    decrement() {
    if (this.quantity === 1) {
       alert('Negative quantity not allowed')
    } else {
    this.quantity--}
    },
    },
  async mounted() {
    this.items = JSON.parse(localStorage.getItem("item") || '[]')
    console.log(this.items)
  },
}

</script>
<template>
  <headerVue/>
  <div class="cart">
    <div class=" text-2xl font-bodoniModa pl-36 pt-4">
        <h1 >My cart</h1>
    </div>
    <br>
    <div class="flex justify-evenly ">
      <!-- v-for="(product,index) in products" :key="index" -->
      <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
            
        </tr>
        <tr class="h-48 " >
            <td><img alt="" class="h-48" :src="items.imageUrl" /></td>
            
            <td>
               1
            </td>
            <td>{{ items.price }}</td>
            <td><img class="w-12" src="https://static.vecteezy.com/system/resources/thumbnails/003/241/364/small/trash-bin-icon-line-vector.jpg"> </td>
        </tr>
        </table>
        <div class="pay border-2 rounded-lg bg-[#E6E5FF] w-3/12">
        <h1 class="text-xl font-bold">Summary</h1>
        <br>
        <div class="summary flex justify-around">
          <div class="topic">
                      <h2 class=" font-semibold">Total</h2>
                      <h2 class="font-semibold">Delivery</h2>
                      <h2 class="font-semibold">Est. tax</h2>
                      <br>
                      <!-- <h2 class="font-semibold">Total</h2> -->
            </div>
            <div class="value">
              <h2>{{ items.price }}</h2>
              <h2>0.0</h2>
              <h2>0.0</h2>
              <br>
            </div>
        </div>
        <hr>
        <div class="sum flex justify-around">
          <div class="total"><h2 class="font-semibold">Total</h2></div>
          <div><h2>{{ items.price }}</h2></div>
        </div>
        <br>
        <router-link to="/deliveryspecials" type="button" class="ml-8 border-2 w-5/6 items-center h-8 rounded-xl text-center border-[#6662CC] bg-[#6662CC] text-white">pay now</router-link>
        </div>
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
    
    hr{
      border: 0;
      clear:both;
      display:block;
      width: 96%;               
      height: 1px;
      background-color: black;
    }
  }
  </style>
  