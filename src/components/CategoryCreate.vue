<template>
    <div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="card">
                    <p class="green">Create Category</p>
                     <form action="" @submit.prevent="createCategory()" method="POST" role="form">
                    
                        <div class="form-group">
                            <input type="text" v-model="name" class="form-control" id="" placeholder="Category Name">
                            {{success}}
                        </div>
                        <button type="submit" class="pull-right btn btn-sm btn-info">Create</button>
                    </form>
                </div>
            </div>
        </div> 
    </div>

</template>


<script>
import axios from "axios";
import { BaseURL } from "../utils/config";
export default {
  mounted() {},
  data() {
    return {
      name: "",
      categories: [],
      success: ""
    };
  },
  methods: {
    createCategory() {
      axios
        .post(BaseURL + "api/v1/category/create", { name: this.name })
        .then(response => {
          this.success = "Category has been created";
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
    }
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  padding: 60px;
  box-shadow: 1px 1px 3px grey;
  margin-top: 60px;
}

.btn {
  border-radius: 0.1em;
  padding-left: 30px;
  padding-right: 30px;
}

.green {
  color: rgb(60, 134, 60);
  font-size: 15px;
}

.form-control {
  border-radius: 0.04em;
}
</style>