<script>
import headerVue from '@/components/header.vue';
import FooterView from '../components/footer.vue';
export default{
    components: {
      headerVue,
      FooterView
    },
    data() {
    return {
      categories: [],
      products: [],
      title: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
    }
}
,
  methods:{
    },
  async mounted() {
    this.products = JSON.parse(localStorage.getItem("product") || '[]')
    console.log(localStorage.product);
  },
}

</script>
<template>
  <headerVue/>
<div class="delivery">
    <div class="text-xl font-bodoniModa pl-36 pt-4">
        <h1>Delivery Detials</h1>
    </div>
    <br>
    <div class="flex justify-around">
        <form>
            <label for="address" class="font-bold ">use save Address:</label>
            <input type="text" value="123, Avenue" class=" bg-gray-300 rounded w-2/6 h-7 ml-5">
            <br>
            <br>
            <label for="" class="text-gray-300 ">First line of Address</label>
            <br>
            <input type="text" id="" name="" value="1 2 3..." class="bg-gray-300 rounded w-5/6 h-10 leading-8">
            <br>
            <label for="" class="">Street Name</label>
            <br>
            <input type="text" id="" name="" value="Electric Avenue" class="bg-gray-300 rounded w-5/6 h-10 leading-8">
            <br>
            <label for="" class="leading-relaxed">first line of Address</label>
            <br>
            <input type="text" id="" name="" value="1 2 3..." class="bg-gray-300 rounded w-5/6 h-10 leading-relaxed">
            <div class="flex flex-wrap">
                <div>
                    <label for="">Postcode</label>
                    <br>
                    <input type="text" id="" name="" value="ABC-123" class="bg-gray-300 rounded w-32 h-10 "> 
                </div>
                <div>
                     <label for="" class="ml-6">Select Shipping</label>
                    <br>
                    <select name="ship" class="font-semibold bg-gray-300 rounded h-10 ml-6" id="ship">
                            <option value="free">Free Shipping</option>
                            <option value="free">Shipping</option>
                    </select>
                </div>
            </div>   
            <div>
                <br>
                <router-link to="/cart" type="button" class=" border-2 w-32 items-center h-8 rounded-xl text-center ">Cancel Order</router-link>
                <router-link to="/payment" type="button" class="ml-8 border-2 w-28 items-center h-8 rounded-xl text-center border-[#6662CC] bg-[#6662CC] text-white">Payment</router-link>
            </div>
        </form>
        <div class="pay border-2 rounded-lg bg-[#E6E5FF] w-3/12 h-48">
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
              <h2>{{ products.price }}</h2>
              <h2>0.0</h2>
              <h2>0.0</h2>
              <br>
            </div>
        </div>
        <hr>
        <div class="sum flex justify-around">
          <div class="total"><h2 class="font-semibold">Total</h2></div>
          <div><h2>{{ products.price }}</h2></div>
        </div>
        </div>
    </div>

    <FooterView />
</div>
    
  </template>
  <style>
  @media (min-width: 1024px) {
    .delivery{
      min-height: 100vh;
      /* display: flex; */
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
  