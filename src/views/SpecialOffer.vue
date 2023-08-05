<script>
import headerVue from "../components/header.vue";
import categoryApi from "@/libs/apis/category";
import itemApi from "@/libs/apis/item";
import FooterView from '../components/footer.vue';
export default {
  components: { headerVue,FooterView },
  data() {
    return {
      categories: [],
      items: [],
      name: "",
      categoryId: "",
      desc: "",
      price: "",
      imageUrl: "",
      selectId: this.$route.params.Sid,
    };
  },
  methods: {
    gotoselect(selectId) {
      this.$router.push({ name: "productselect", params: { Sid: selectId } });
    },
  },
  async mounted() {
    (this.categories = await categoryApi.all()),
      (this.items = await itemApi.all());
  },
};
</script>
<template>
  <headerVue />
  <div class="about">
    <div class="fight text-3xl font-bold pl-36 pt-4">
      <h1>New Arrivals</h1>
    </div>
    <div class="wrap">
    <div class="content" v-for="item in items" :key="item._id">
        <div class="border-2 flex boder-black w-96">
          <div>
            <img :src="item.imageUrl" alt="" class="h-52" />
          </div>

          <div class="pt-4 details">
            <h3 class="font-semibold text-xl">{{ item.name }}</h3>
            <p>discount: 20%</p>
            <p>{{ item.desc }}</p>
            <h3>{{ item.price }}</h3>
            <br />
            <button type="button" class="btn" @click="gotoselect(item._id)">
              Discover
            </button>
        </div>
      </div>
    </div> </div>
    <FooterView />
  </div>
</template>

<style>
.wrap{
  display: grid;
  grid-template-columns: auto auto auto;
}
@media (min-width: 1024px) {
  .about {
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
    /* background-color: #E6E5FF; */
    /* color: #807BFF; */
    border-radius: 10px;
    padding: 15px;
    width: 100px;
  }
}
</style>
