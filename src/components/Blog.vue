<template>
    <div>
        <div class="row" style="margin-top: 50px;">
            <div class="col-md-4 col-sm-6 card" v-for="blog in blogs" :key="blog._id">
                <router-link :to="{name:'BlogDetail', path: 'news', params:{id: blog._id}}">
                <img :src="image" class="img-responsive" :width="width">
                <h3 class="text-center title">{{blog.title}}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { BaseURL } from "../utils/config";
import image from "./../assets/binary.jpg";
export default {
  mounted() {
    this.getBlog();
  },
  data() {
    return {
      image: image,
      blogs: [],
      width: "100%"
    };
  },
  methods: {
    getBlog() {
      axios
        .get(BaseURL + "api/v1/blog")
        .then(response => {
          this.blogs = response.data;
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  padding: 3px;
  box-shadow: 1px 1px 3px grey;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
}

.card:hover {
  box-shadow: 1px 1px 10px rgba(247, 149, 70, 0.699);
}

.title {
  color: grey;
  text-transform: capitalize;
  font-size: 20px;
  font-family: sans-serif;
}
a:hover {
  text-decoration: black;
}
</style>