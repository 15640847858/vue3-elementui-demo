<template>
  <MainLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/components/MainLayout.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainLayout,
  },
});
</script>

<style scoped></style>
