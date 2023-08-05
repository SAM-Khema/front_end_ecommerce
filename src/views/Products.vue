<script>
import headerVue from "../components/header.vue";
import categoryApi from "@/libs/apis/category";
import productApi from "@/libs/apis/product";
import FooterView from '../components/footer.vue';

export default {
  components: { headerVue,FooterView },
  data() {
    return {
      categories: [],
      products: [],
      title: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      selectId: this.$route.params.Sid,
      // formatLable: "Add new",
      // isonEdit: false,
    };
  },
  methods: {
    gotoselect(selectId) {
      this.$router.push({ name: "productselect", params: { Sid: selectId } });
    },
  },
  async mounted() {
    (this.categories = await categoryApi.all()),
      (this.products = await productApi.all());
      
  },
};
</script>
<template>
  <headerVue />
  <div class="product">
    <div class="first-part text-3xl font-bold pl-36 pt-4">
      <h1>Our Product</h1>
    </div>
    <div class="wrap">
    <div class="content" v-for="product in products" :key="product._id">
        <div class="border-2 flex boder-black w-96">
          <div>
            <img :src="product.imageUrl" alt="" class="h-52" />
          </div>

          <div class="pt-4 details">
            <h3 class="font-semibold text-xl">{{ product.title }}</h3>
            <p>{{ product.desc }}</p>
            <h3>{{ product.price }}</h3>
            <br />
            <button type="button" class="btn" @click="gotoselect(product._id)">
              Discover
            </button>
        </div>
      </div>
    </div> </div>
    <h1 class="first-part text-3xl font-bold pl-36">Best Seller</h1>
    <div class="bestseller flex pl-36 justify-evenly">
      <br />
      <div
        class="best"
        v-for="product in products.slice(0, 2)"
        :key="product._id"
      >
        <div class="itm">
          <div class="details">
            <h3 class="font-semibold text-xl">{{ product.title }}</h3>
            <br />
            <p>{{ product.desc }}</p>
            <br />
            <button type="button" class="btn" @click="gotoselect(product._id)">
              Discover
            </button>
          </div>
          <div>
            <img alt :src="product.imageUrl" class="h-64" />
          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<style>
.wrap{
  display: grid;
  grid-template-columns: auto auto auto;
}
@media (min-width: 1024px) {
  .product {
    min-height: 100vh;
  }
  .content {
    padding-top: 50px;
    margin-left: 100px;
  }
  .details {
    height: 200px;
    border-radius: 10px;
    padding-left: 30px;
  }
  .wrapp {
    margin: 25px;
    margin-right: 5px;
    width: 25%;
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
  }
  .wrapp p {
    color: gray;
  }
  .btn {
    border: 2px solid black;
    border-radius: 10px;
    padding: 15px;
  }
  .best {
    margin-left: 10px;
    align-content: stretch;
    justify-content: center;
  }

  .best .details {
    width: 200px;
    height: 250px;
    background-color: #96dbdb;
    border: 2px solid #96dbdb;
    padding-left: 30px;
  }
  .itm {
    margin-right: 5px;
    gap: 4px;
    justify-content: space-between;
  }
  .itm p {
    color: grey;
  }
  .itm {
    display: flex;
  }
  hr {
    padding-top: 5px;
    color: black;
  }
}
</style>
