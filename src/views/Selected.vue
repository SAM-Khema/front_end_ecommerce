<script>
import headerVue from "@/components/header.vue";
import productApi from '../libs/apis/product';
import itemApi from '../libs/apis/item';
import FooterView from '../components/footer.vue';
export default {
  components: { headerVue, FooterView},
  data() {
    return {
      selectId: this.$route.params.Sid,
      products:[],
      items:[],
      quantity: 1,
      // AddId: this.$route.params.cid,
    };
  },
  methods:{
     addItemToCart(product){
      localStorage.setItem("product",JSON.stringify(product));
      console.log(product);
      this.$router.push("/cart");
    },
    addItemintoCart(item){
      localStorage.setItem("item",JSON.stringify(item));
      console.log(item);
      this.$router.push("/cartspecials");
    },
    movetopayment(product){
      this.$router.push("/payment");
      localStorage.setItem("product",JSON.stringify(product));
      console.log(product)
    },
    movetopay(item){
      this.$router.push("/cartspecials");
      localStorage.setItem("item",JSON.stringify(item));
      console.log(item)
    },
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
  async mounted(){
    this.products = await productApi.all();
    this.items = await itemApi.all();
  },
 
};
</script>
<template>
  <headerVue />
  <div class="selected">
    <div class="text-2xl font-bodoniModa pl-36 pt-4" >
      <h1>Product Women</h1>
    </div>
    <div v-for="(product,index) in products" :key="index">
    <div class="selected flex justify-around" v-if="selectId == product._id">
      <div class="dispic">
        <br />
        <img alt="" :src="product.imageUrl" class="h-96" />
      </div>
      <div class="disdata pt-11">
        <h2 class="font-traviraj text-3xl">{{ product.title }}</h2>
        <h2 class="font-semibold text-3xl">{{ product.price }}</h2>
        <hr class="bold black" />
        <br />
        <p>Fit with all women from 18 to 25</p>
        <label for="size" class="font-bold">Size:</label>
        <select name="size" class="font-semibold" id="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <br />
        <br />
        <label for="quantity" class="font-bold">Quantity:</label>
        <br />
        <div class="quantity-toggle mt-5 mx-5">
                <button @click="decrement()" class="rounded-lg ">&minus;</button>
                  <input type="text" :value="quantity" readonly
                    class=" text-center num rounded">
                <button @click="increment()" class="rounded-lg">&plus;</button>
               </div>
        <br />
        <br />
        <div class="flex">
          <div>
            <button type="button" class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]" @click="addItemToCart(product)">Add to cart</button>
          </div>
          <div class="ml-4">
            <button
              to=""
              type="button"
              class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]" @click="movetopayment(product)"
              >Buy now</button
            >
          </div>
        </div>
      </div>
    </div>
</div>
<div v-for="(item,index) in items" :key="index">
    <div class="selected flex justify-around" v-if="selectId == item._id">
      <div class="dispic">
        <br />
        <img alt="" :src="item.imageUrl" class="h-96" />
      </div>
      <div class="disdata pt-11">
        <h2 class="font-traviraj text-3xl">{{ item.name }}</h2>
        <h2 class="font-semibold text-3xl">{{ item.price }}</h2>
        <hr class="bold black" />
        <br />
        <p>Fit with all women from 18 to 25</p>
        <label for="size" class="font-bold">Size:</label>
        <select name="size" class="font-semibold" id="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <br />
        <br />
        <label for="quantity" class="font-bold">Quantity:</label>
        <br />
        <input
          type="text"
          id="quantity"
          name="quantity"
          value="1 2 3..."
          class="bg-[#E6E5FF] rounded"
        />
        <br />
        <br />
        <div class="flex">
          <div>
            <button type="button" class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]" @click="addItemintoCart(item)">Add to cart</button>
          </div>
          <div class="ml-4">
            <button
              type="button"
              class="border-2 rounded-xl p-4 border-[#6662CC] text-[#6662CC]" @click="movetopay(item)"
              >Buy now</button>
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
  .selected {
    min-height: 100vh;
    /* display: flex; */
  }
}
</style>
