<script setup lang="ts">
import { computed } from "vue";

import { getStats } from "@/utils/api";
import { styles } from "@/utils/styles";
import { formatTimeRelativeToNow } from "@/utils/time";

import AppHeader from "@/components/AppHeader.vue";
import StatChart from "@/components/StatChart.vue";
import ProductPanel from "@/components/ProductPanel.vue";
import MobileBar from "@/components/MobileBar.vue";
import MobileStats from "@/components/MobileStats.vue";

const stats = getStats();

const updatedTimeFriendly = computed(() => {
  return formatTimeRelativeToNow(stats.value.lastUpdatedAt);
});
</script>
<template>
  <header>
    <AppHeader
      :created-at="stats.createdAt"
      :last-updated-at="stats.lastUpdatedAt"
    />
  </header>
  <main>
    <div>
      <div :class="styles.notificationBar">
        Last Updated: {{ updatedTimeFriendly }}
      </div>
      <div class="md:hidden">
        <MobileBar />
        <MobileStats :stats="stats" />
      </div>
      <div class="hidden md:block mx-2">
        <ProductPanel :products="stats.products" />
        <StatChart />
      </div>
    </div>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
