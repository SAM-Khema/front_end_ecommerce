<script>

import categoryApi from "@/libs/apis/category";
import productApi from "../libs/apis/product";
import FooterView from '../components/footer.vue';
export default {
  components: {
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
    };
  },
  methods:{
        gotoselect(selectId){
            this.$router.push({name:'productselect',params:{Sid:selectId}})
        }
    },
  async mounted() {
    (this.categories = await categoryApi.all()),
      // this.items = await itemApi.all()
      (this.products = await productApi.all());
  },
};
</script>
<template>
  <header>
    <div>
    
        <router-link to="/dashboard"><div class=""><img
        alt="icon"
        class="logo"
        src="@/assets/css/images/icon.svg"
        width="125"
        height="125"
      /></div></router-link>
      
      
    </div>
    <div class="wrapper">
      <nav class="">
        <RouterLink to="/" class="hover:text-violet-400 active:text-violet-400"
          >Home</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-violet-400 active:text-violet-400"
          >Product</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-violet-400 active:text-violet-400"
          >Special Offer</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-violet-400 active:text-violet-400"
          >Contact us</RouterLink
        >
      </nav>
    </div>
    <div class="search">
      <input type="text" placeholder="Search.." />
    </div>
    
    <div class="acc">
      <RouterLink to="/login"
        ><img
          alt="acc"
          style="width: 40%"
          src="data:image/png;base64,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"
      /></RouterLink>
    </div>
  </header>

  <div class="home">
    <div class="first">
      <img
        alt=""
        class="group"
        src="@/assets/css/images/homepic/groupshirt.svg"
        width="100%"
      />
    </div>
    <div class="second">
      <h1 class="font-semibold text-4xl">Here is what we have for you</h1>
      <br />
      <p class="text-xl">
        Find the best outifit is not a problem anymore.New STYLE & FASHION Start
        with us
      </p>
    </div>
    <div class="new">
      <div class="w-9/12">
        <img alt="" src="@/assets/css/images/homepic/left_shirt.svg" />
        <div class="text-center text-2xl">
          <h2>Men's shirt</h2>
        </div>
      </div>
      <div class="w-9/12">
        <img alt="" src="@/assets/css/images/homepic/middle_shirt.svg" />
        <div class="text-center text-2xl">
          <h2>Women top</h2>
        </div>
      </div>
      <div class="w-9/12">
        <img alt="" src="@/assets/css/images/homepic/right_shirt.svg" />
        <div class="text-center text-2xl">
          <h2>New Style</h2>
        </div>
      </div>
    </div>
    <br />
    <div class="last-content">
      <h1 class="font-bold text-3xl text-center justify-center pt-3">
        New Release Product
      </h1>
    </div>
    <div class="new">
      <div class="fcol">
        <div class="dataitem flex rounded gap-16">
          <div
            v-for="product in products.slice(0, 3)"
            :key="product._id"
            class="border-2 flex"
          >
            <div><img :src="product.imageUrl" class="h-64" /></div>
            <div class="details pt-6">
              <h3 class="text-xl">{{ product.title }}</h3>
              <br />
              <p class="text-gray-300">{{ product.desc }}</p>
              <h3 class="text-xl">{{ product.price }}</h3>
              <br />
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
header {
  line-height: 1.5;
  width: 100%;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
header {
  display: flex;
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
nav {
  margin: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  margin-top: 1rem;
}
.search input[type="text"] {
  background-color: azure;
  float: right;
  padding: 6px;
  border: none;
  margin-top: 30px;
  margin-right: 10px;
  font-size: 17px;
}
.cart {
  margin-top: 20px;
}
.acc {
  margin-top: 20px;
}
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    /* width: fit-content; */
  }
  .first {
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }
  .second {
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
  .last-content {
    width: fit-content;
    height: 70px;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin: auto;
    padding: auto;
  }

  .new {
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
  .fcol .details {
    width: 150px;
    height: 250px;
    border-radius: 10px;
    padding-left: 30px;
  }
}
</style>
