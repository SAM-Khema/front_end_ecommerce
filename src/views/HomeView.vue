<script>
import headerVue from '../components/header.vue';
import categoryApi from "@/libs/apis/category";
import productApi from "../libs/apis/product";
import FooterView from '../components/footer.vue';
export default{
    components: {
      headerVue,
      FooterView
    },
    data() {
    return {
      categories: [],
      // items: [],
      products: [],
      title: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      selectId: this.$route.params.Sid,
    }
  },
  methods:{
        gotoselect(selectId){
            this.$router.push({name:'productselect',params:{Sid:selectId}})
        }
    },
  async mounted() {
    this.categories = await categoryApi.all(),
    // this.items = await itemApi.all() 
    this.products = await productApi.all()
  },
}
</script>

<template>
  <headerVue />
  <div class="home">
    <div class="first">
      <img alt="" class="group" src="@/assets/css/images/homepic/groupshirt.svg" width="100%"/>
    </div>
    <div class="second ">
      <h1 class="font-semibold text-4xl">Here is what we have for you</h1>
      <br>
      <p class="text-xl">Find the best outifit is not a problem anymore.New STYLE & FASHION Start with us</p>
    </div>
      <div class="new">
        <div class=" w-9/12">
         <img alt="" src="@/assets/css/images/homepic/left_shirt.svg" />
          <div class= "text-center text-2xl">
            <h2>Men's shirt</h2>
          </div>
        </div>
        <div class="w-9/12">
          <img alt="" src="@/assets/css/images/homepic/middle_shirt.svg" />
          
          <div class= "text-center text-2xl">
            <h2>Women top</h2>
          </div>
          
        </div>
        <div class="w-9/12">
         <img alt="" src="@/assets/css/images/homepic/right_shirt.svg" />
          <div class= "text-center text-2xl">
            <h2>New Style</h2>
          </div>
        </div>
      </div>
      <br>
    <div class="last-content">
        <h1 class="font-bold text-3xl text-center justify-center pt-3">New Release Product</h1>
    </div>
    <div class="new">
        <div class="fcol">
         <div class="dataitem flex rounded gap-16" >
          <div v-for="product in products.slice(0,3)" :key="product._id" class="border-2 flex">
            <div><img :src="product.imageUrl" class="h-64" /></div>
            <div class="details pt-6 " >
               <h3 class="text-xl">{{ product.title }}</h3>
               <br>
                <p class="text-gray-300">{{product.desc}}</p>
                <h3 class="text-xl">{{ product.price }}</h3> 
                <br>
                <!-- <router-link to="/Selected" type="button" class="btn ">Discover</router-link> -->
                <button type="button" class="btn " @click="gotoselect(product._id)">Discover</button>
            </div>
         </div>
        </div>

        </div>
      </div>
    
      <FooterView />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    /* width: fit-content; */
  }
  .first{
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }
  .second{
    align-items: center;
    text-align: center;
  }
  .new {
    padding-right: 120px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-evenly;
  }
  .last-content{
    width: fit-content;
    height: 70px;
    border: 1px solid #F5F5F5;
    background-color: #F5F5F5;
    border-radius: 10px;
    margin: auto;
    padding:auto;
  }

  .btn{
      border: 2px solid black;
      border-radius: 10px;
      padding: 15px;
    }
  
  .new{
     padding-top: 50px;
      margin-left: 100px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
    }
    .fcol {
      margin-left: 40px;
      display: grid;
      grid-template-columns: auto auto auto;
      /* grid-gap: 200px; */
      
    }
    .fcol .details{
      width :150px;
      height : 250px;
      border-radius: 10px;
      padding-left: 30px;
     
    }
  
}
</style>
