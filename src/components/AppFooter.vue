<script setup lang="ts">
import Button from "primevue/button";
import { styles } from "@/utils/styles";

const goToGithub = () => {
  window.open(import.meta.env.VITE_PROJECT_URL);
};
</script>

<template>
  <div :class="styles.footer">
    <Button
      label="Project Page"
      icon="pi pi-github"
      :class="styles.footerButton"
      @click="goToGithub"
    />
  </div>
</template>
