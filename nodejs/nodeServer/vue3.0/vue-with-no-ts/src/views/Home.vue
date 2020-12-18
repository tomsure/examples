<template>
  <div class="home"></div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from "vue";
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
  },
};
</script>
