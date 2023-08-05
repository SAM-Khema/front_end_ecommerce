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
<div class="payment">
    <div class="text-xl font-bodoniModa pl-36 pt-4">
        <h1>Payment Detials</h1>
    </div>
    <br>
    <div class="flex justify-around">
        <form>
            <label for="" class="font-bold">use save card</label>
                    <select name="card" class="font-semibold bg-gray-300 rounded h-10 ml-8" id="card">
                            <option value="free">Master Card</option>
                            <option value="free">Visa Card</option>
                    </select>

            <br>
            <br>
            <label for="" class="text-gray-300 ">Name on Card</label>
            <br>
            <input type="text" id="" name="" value="SAM KHEMA" class="bg-gray-300 rounded w-11/12 h-10 leading-8">
            <br>
            <label for="" class="">Card Number</label>
            <br>
            <input type="text" id="" name="" value="123 - 456 -" class="bg-gray-300 rounded w-11/12 h-10 leading-8">
            <br>
            <div class="flex flex-wrap">
                <div>
                    <label for="">Expiration</label>
                    <br>
                    <input type="text" id="" name="" value="03" class="bg-gray-300 rounded w-16 h-10 "> 
                    <input type="text" id="" name="" value="24" class="bg-gray-300 rounded w-16 h-10 ml-2"> 
                </div>
                <div>
                     <label for="" class="ml-2">CVV</label>
                    <br>
                    <input type="text" id="" name="" value="082" class="bg-gray-300 rounded w-24 h-10 ml-2 "> 
                    
                </div>
            </div>   
            <div>
                <br>
                <router-link to="/delivery" type="button" class=" border-2 w-32 items-center h-8 rounded-xl text-center ">Cancel Order</router-link>
                <router-link to="/sucessful" type="button" class="ml-2 border-2 w-32 items-center h-8 rounded-xl text-center border-[#6662CC] bg-[#6662CC] text-white">complete Order</router-link>
            </div>
        </form>
        <div class="pay border-2 rounded-lg bg-[#E6E5FF] w-3/12 h-48">
        <h1 class="text-xl font-bold">Summary</h1>
        <br>
        <div class="summary flex justify-around">
          <div class="topic">
                      <h2 class=" font-semibold">subtotal</h2>
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
    .payment{
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
  