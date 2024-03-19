<template>
  <div class="all">
    <div class="all-container">
      <topBar></topBar>
      <canvas id="webgl" ref="webglDom"></canvas>
    </div>
  </div>
</template>

<script setup>
import topBar from "@/components/topBar.vue";
import Experience from "@/Experience/Experience";
import { onMounted, ref, onBeforeUnmount } from "vue";
const webglDom = ref(null);
let experience = null;
onMounted(() => {
  experience = new Experience(webglDom.value);
});
onBeforeUnmount(() => {
  experience.destroy();
});
</script>
<style scoped lang="less">
.all-container {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: url("../assets/indexPhoto/BG1.png");
  background-size: 100% 100%;
  background-image: url("@/assets/background2.png");
  z-index: -99;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  #webgl {
    flex: 1;
    // height: 100%;
  }
  // .content {
  //   flex: 1;
  //   display: flex;
  //   margin: 0 61px 61px 61px;
  //   justify-content: space-between;

  //   &-left {
  //     width: 450px;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     height: 100%;
  //   }
  //   &-center {
  //     flex: 1;
  //   }
  //   &-right {
  //     width: 450px;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     height: 100%;
  //   }
  // }
}
</style>
