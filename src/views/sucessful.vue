<script>
import headerVue from '@/components/header.vue';
import FooterView from '../components/footer.vue';
export default{
    components: {headerVue, FooterView}
}

</script>
<template>
  <headerVue/>
  <div class="pay">
    <div class="flex justify-evenly">
        <img src="@/assets/css/images/payment/sucessful.svg" alt="sucessful">
        <img src="@/assets/css/images/payment/good.svg" alt="good">
        
    </div>
    <div class="flex justify-end pr-56 ">
                <br>
                <router-link to="/order" type="button" class=" border-2 w-32 items-center h-8 rounded-xl text-center ">Your Order</router-link>
                <router-link to="/home" type="button" class="ml-8 border-2 w-32 items-center h-8 rounded-xl text-center border-[#6662CC] bg-[#6662CC] text-white">Back Home</router-link>
    </div>
    <FooterView />
  </div>
  </template>
  <style>
  @media (min-width: 1024px) {
    .pay {
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
  