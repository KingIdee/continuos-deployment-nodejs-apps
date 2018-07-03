<template>
    <div>
        <div class="row" style="margin-top: 50px;">
          
            <div class="col-md-8 col-md-offset-2">
              <h3 class="text-center label label-default" style="text-transform: capitalize">{{blog.title}}</h3>
              <div class="card">
                
                <img :src="image" width="100%">
                <p class="text-justify news">{{blog.description}}</p>
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
    this.getNews(this.$route.params.id);
  },
  data() {
    return {
      image: "/static/binary.jpg",
      blog: {}
    };
  },
  methods: {
    getNews(id) {
      axios
        .get(BaseURL + "api/v1/blog/" + id)
        .then(response => {
          this.blog = response.data;
        })
        .catch(err => {});
    }
  }
};
</script>


</script>

<style scoped>
.card {
  background-color: white;
  padding: 3px;
  box-shadow: 1px 1px 3px grey;
  margin-top: 60px;
  margin-bottom: 60px;
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
.news {
  padding: 15px;
  font-size: 16px;
  line-height: 30px;
}
</style>