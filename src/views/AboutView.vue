<template>
  <div class="about">
    <h1>This is an about page<br> <em>'we makansh fe data mb3ota 3la this page'</em></h1>
    <AboutLol />
  </div>
</template>
<script>
// @ is an alias to /src
import AboutLol from "@/components/AboutLol.vue";

export default {
  name: "aboutView",
  components: {
    AboutLol,
  },
};
</script>
