<script>
import categoryApi from "@/libs/apis/category";
import itemApi from "@/libs/apis/item";

export default {
  data() {
    return {
      categories: [],
      items: [],
      name: "",
      categoryId: "",
      desc: "",
      formatLable: "Add new",
      isonEdit: false,
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { id, name, desc, categoryId } = this;
      let result;
      if (!this.isonEdit) {
        result = await itemApi.create({ name, desc, category: categoryId });
      } else if (this.isonEdit) {
        result = await itemApi.update({ id, name, desc, category: categoryId });
        this.isonEdit = false;
      }
      if (!result) {
        alert(result.error);
        return;
      }
      this.formatLable = "Add new";
      this.items = await itemApi.all();
      this.name = this.desc = this.categoryId = "";
    },
    updateItem(data) {
      this.id = data._id;
      this.name = data.name;
      this.desc = data.desc;
      this.categoryId = data.categoryId;
      this.isonEdit = true;
      this.formatLable = "update";
    },
    cancel() {
      this.id = "";
      this.name = "";
      this.desc = "";
      this.categoryId = "";
      this.isonEdit = false;
      this.formatLable = "Add new";
    },
  },
  async mounted() {
    this.categories = await categoryApi.all();
    this.items = await itemApi.all();
  },
};
</script>

<template>
  <main>
    <div class="bg-violet-400 text-white py-2 text-lg text-center">
      <h1>Item</h1>
    </div>
    <div class="py-2">
      <form @submit="onSubmit" method="post">
        <div class="flex flex-row py-2 px-2 space-x-2 bg-violet-200">
          <div>
            <input v-model="name" type="text" placeholder="Name" required />
          </div>
          <div>
            <label for="category">Choose a category:</label>
            <select
              v-model="categoryId"
              name="category"
              required
              class="px-2 mx-2 rounded-sm bg-green-100"
            >
              <option
                v-for="category in categories"
                :key="category.name"
                :value="category._id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div>
            <input
              v-model="desc"
              required
              type="text"
              placeholder="Description"
            />
          </div>
          <div class="flex gap-5">
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
            >
              {{ formatLable }}
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
              @click="cancel()"
              v-if="isonEdit"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
    <div>
      <table id="customers">
        <tr class="bg-violet-400">
          <th>Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Action</th>
        </tr>

        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>
            <img
              :src="item.imageUrl"
              alt=""
              style="width: 100px; height: 100px; padding: 5px"
            />
          </td>
          <td>{{ item.desc }}</td>
          <td>
            <div class="flex flex-col space-y-2">
              <button
                v-on:click="updateItem(item)"
                class="hover:text-green-600 hover:font-bold"
              >
                Edit
              </button>
              <button class="hover:text-green-600 hover:font-bold">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: rgb(196 181 253);
}
</style>
