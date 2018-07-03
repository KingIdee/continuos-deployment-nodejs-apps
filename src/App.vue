<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="/">
      <i class="fa fa-globe"></i>
    </a>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <li>
        <router-link to="/blog">
          Blog
        </router-link>
        </li>
      <li>
        <router-link to="/categories">
          Categories
        </router-link>
        
        </li>

        <li>
        <router-link to="/categories/create">
          Create Categories
        </router-link>
        
        </li>
        <li>
        <router-link to="/news/create">
          Create News
        </router-link>
        
        </li>
    </ul>
    
    <ul v-if="isLoggedIn()" class="nav navbar-nav navbar-right">
      <li @click="handleLogout()"><a href="#"><i class="	fa fa-power-off"> </i> Logout</a></li>
     
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>
    <div class="container">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    </div>
  </div>
</template>

<script>
import { isLoggedIn, login, logout } from "./utils/auth";
export default {
  name: "App",
  data() {
    return {
      auth: false
    };
  },
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

<style>
.navbar {
  background-color: #99b999d9;
}

.navbar-default .navbar-nav > li > a {
  color: white;
  font-size: 15px;
}
</style>
