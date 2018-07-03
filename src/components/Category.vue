<template>
    <div>
            <div class="row">
                <div class="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item green"  v-for="category in categories" :key="category._id">
                            {{category.name}}<span class="pull-right red"><i @click="deleteCategory(category._id)" class="fa fa-trash"></i></span>
                        </li>
                    </ul>
                   
                </div>
            </div>
    </div>
</template>


<script>
import axios from "axios";
import { BaseURL } from "../utils/config";
export default {
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      name: "",
      categories: []
    };
  },
  methods: {
    createCategory() {
      axios
        .post(BaseURL + "api/v1/category/create", { name: this.name })
        .then(response => {
          this.getCategories();
        })
        .catch(err => {});
    },

    getCategories() {
      axios
        .get(BaseURL + "api/v1/category")
        .then(response => {
          this.categories = response.data;
        })
        .catch(err => {});
    },
    deleteCategory(id) {
      axios
        .post(BaseURL + "api/v1/category/delete/" + id)
        .then(response => {
          this.getCategories();
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
.green {
  color: rgb(60, 134, 60);
  font-size: 15px;
}

.red {
  color: red;
  font-size: 15px;
}
</style>