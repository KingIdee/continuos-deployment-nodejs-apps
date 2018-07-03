
<template>
  <div>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="card text-center">
            <p class="red">Authentication Required</p>
            <p>
              <i style="color: grey" class="fa fa-globe fa-3x"></i>
              <br><br>
            </p>
            <button @click="handleLogin()" class="btn btn-info btn-md">Login</button>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
import { isLoggedIn, login, logout } from "../utils/auth";
export default {
  mounted() {},

  methods: {
    handleLogin() {
      login();
    },

    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.red {
  color: red;
  font-size: 12px;
}
</style>
