<template>
    <div></div>
</template>
<script>
import { setIdToken, setAccessToken } from "../utils/auth";

export default {
  name: "",
  mounted() {
    // alert("hjsdvfdbg");
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href = "/";
    });
  }
};
</script>