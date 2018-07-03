<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="card">
                    <p class="text-center">
                        <i style="color: grey" class="fa fa-globe fa-5x"></i>
                    </p>
                    <p class="green">Create News</p>
                     <form action="" @submit.prevent="createNews()" method="POST" role="form">
                    
                        <div class="form-group">
                            <input type="text" v-model="title" class="form-control" id="" placeholder="News Title">
                           
                        </div>
                        <div class="form-group">
                            <textarea type="text" v-model="description" rows="6" class="form-control" id="" placeholder="News Description"></textarea>
                        </div>
                        <div class="form-group">
                            <select v-model="category_id" class="form-control">
                                <option value="">Select a Category
                                </option>
                                <option v-for="category in categories" :key="category._id" :value="category._id">{{category.name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
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
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      title: "",
      description: "",
      category_id: "",
      categories: [],
      success: ""
    };
  },
  methods: {
    createNews() {
      let data = {
        title: this.title,
        description: this.description,
        category_id: this.category_id
      };
      axios
        .post(BaseURL + "api/v1/blog/create", data)
        .then(response => {
          this.success = "News has been created";
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